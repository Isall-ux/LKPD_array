const fs = require("fs")
const path = require("path")

const name = process.argv[2]
const type = process.argv[3] || "all" // default = all

if (!name) {
  console.error("Please provide a feature name. Example: npm run models user")
  process.exit(1)
}


const validTypes = ["all", "controller", "routes", "model"]
if (!validTypes.includes(type)) {
  console.error(`Invalid type "${type}". Use one of: ${validTypes.join(", ")}`)
  process.exit(1)
}

const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
const featureDir = path.join(process.cwd(), "src", "features", name)

if (!fs.existsSync(featureDir)) fs.mkdirSync(featureDir, { recursive: true })

const controllerContent = `exports.getAll${capitalized} = (req, res) => {
  res.send("Get all ${name}")
}`

const routeContent = `const express = require("express")
const router = express.Router()
const { getAll${capitalized} } = require("./${name}.controller")

router.get("/", getAll${capitalized})

module.exports = router
`

const modelContent = `// Model for ${name}
module.exports = {}
`

const createFile = (fileName, content) => {
  const filePath = path.join(featureDir, fileName)
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content)
    console.log("Created:", filePath)
  } else {
    console.log(filePath, "already exists, skipping")
  }
}

if (type === "all" || type === "controller") {
  createFile(`${name}.controller.js`, controllerContent)
}
if (type === "all" || type === "routes") {
  createFile(`${name}.routes.js`, routeContent)
}
if (type === "all" || type === "model") {
  createFile(`${name}.model.js`, modelContent)
}

console.log(`Feature "${name}" created successfully!`)
