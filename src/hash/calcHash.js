import crypto from "crypto";
import * as fs from 'fs/promises'

export const calculateHash = async () => {
  const fileBuffer = await fs.readFile("files/fileToCalculateHashFor.txt")
  const result = crypto
    .createHash("sha256")
    .update(fileBuffer)
    .digest("hex");

  console.log(result)
}

calculateHash()