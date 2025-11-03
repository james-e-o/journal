const crypto = require('crypto')

 export function encodeID (item){
  console.log('Encoding ID:', item);
  const hashId = crypto.createHmac('sha256',process.env.NEXT_PUBLIC_SECRET_KEY)
  .update(item)
  .digest('hex')
  return hashId
}

