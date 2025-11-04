const fs = require("fs")
const path = require("path")

const name = process.argv[2]
if (!name) {
  console.error("Please provide a feature name. Example: npm run delete user")
  process.exit(1)
}

const featureDir = path.join(process.cwd(), "src", "features", name)

if (fs.existsSync(featureDir)) {
  fs.rmSync(featureDir, { recursive: true, force: true })
  console.log(`Deleted feature folder: ${featureDir}`)
} else {
  console.log("Feature not found, skipping...")
}
