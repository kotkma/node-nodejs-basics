export const parseEnv = () => {
  const envProps = process.env
  for (let prop in envProps) {
    if (prop.startsWith('RSS_'))  {
      console.log(`${prop} = ${envProps[prop]}`)
    }
  }
}

parseEnv()