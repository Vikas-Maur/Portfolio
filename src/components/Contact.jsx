import { useState } from "react"
import toast from "react-hot-toast"
import { ID } from "appwrite";
import conf from "../conf/conf";

const Contact = ({databases=null}) => {
    const [data, setData] = useState({name: "", email: "", message: ""})

    const formSubmit = async (e) => {
        e.preventDefault()
        const toastId = toast.loading('Submitting the form...');
        if(data.name==="" || data.email===""){
            toast.error("Can't submit form without name and email", { id: toastId })
            return
        }
        if(databases===null){
            toast.error("Can't submit form due to an internal error.", { id: toastId })
            return
        }

        try {
            const response = await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                data
            );
            toast.success("Successfully sent the response.", { id: toastId })
        } catch (error) {            
            toast.error(error.message, { id: toastId })
            return <></>
        }

        return <></>
    }
    return (
        <div id="contact" className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
              <h2 className="text-center text-5xl font-extrabold">Get in touch</h2>
                <form onSubmit={formSubmit} action="" className="mt-8 space-y-4">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Name*
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      value={data.name}
                      onChange={(e) => {setData((prev) => ({...prev, name: e.target.value}))}}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email*
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      value={data.email}
                      onChange={(e) => {setData((prev) => ({...prev, email: e.target.value}))}}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Leave me a message"
                      cols={3}
                      value={data.message}
                      onChange={(e) => {setData((prev) => ({...prev, message: e.target.value}))}}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-amber-500 px-3 py-2 text-sm font-extrabold shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
      
    )
}

export default Contact