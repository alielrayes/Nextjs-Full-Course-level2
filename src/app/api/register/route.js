import UserModal from "app/DBconfig/models/user"
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"






export async function POST(request) {
// 1- Receive data from Front-end
const objFromFrontEnd = await request.json()
console.log("*******************************************")
console.log(objFromFrontEnd)

// 2- connect to DB
await connectMongoDB()

// 3- Try to Store obj to DB
await UserModal.create({
  name: objFromFrontEnd.name,
  email: objFromFrontEnd.email,
  password: objFromFrontEnd.password,
})


// 4- Go back to frontend
return NextResponse.json({})
}














