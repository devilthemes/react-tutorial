import { Nav } from "../components/Nav"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input,Textarea,Button } from "@nextui-org/react";
import { useRef } from "react";


export const AddBug = () =>{
    const fileRef = useRef(null);
    return (
 
        <div class="container mx-auto">
        <div className="min-h-screen h-full flex flex-col">
        <Nav />
        <Divider />
      
        <div className="flex justify-center">
            <div class="flex px-6 gap-4 w-full flex-row relative  justify-between max-w-[1024px]">
                <div className="flex flex-col">
                <h1 className="py-4 text-3xl">Add Bug</h1>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    
                <Input type="txt" label="Title" placeholder="Enter your title" className="py-1" />
                <Textarea 
      label="Description"
      placeholder="Enter your description"
      className="w-full py-1"
    />
       <Button onClick={()=>fileRef.current.click()}>Add Image  </Button>
       <input type="file" ref={fileRef} className="opacity-0" />
       <Divider />
       <Button >Add Bug </Button>
    
    </div>
                </div>
            </div>
        </div>

    </div>  </div>


)
}
  