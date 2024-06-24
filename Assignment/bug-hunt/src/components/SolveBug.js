import { Divider, Listbox, ListboxItem } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Input,Textarea} from "@nextui-org/react";
import { useRef } from "react";

export const SolveBug = ()=> {
  const fileRef = useRef(null);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (<div className="flex py-4 flex-col px-4">
        <h2>Solved Bugs</h2>
        <Listbox variant="flat" aria-label="Listbox menu with descriptions">
            <ListboxItem  >
                 <Button  color="warning" onPress={onOpen}> Lorem ipsum dolor sit amet, consectetur adipiscing</Button>
               
            </ListboxItem>
            <ListboxItem
                     

            >
                <Button  color="warning" onPress={onOpen}> Nulla hendrerit arcu eu mi finibus</Button>
            </ListboxItem>
            <ListboxItem
               
                showDivider
              

            >
                 <Button  color="warning" onPress={onOpen}>Cras volutpat massa nec orci </Button>
            </ListboxItem>

        </Listbox>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <a target="_blank" href="/sample1.jpg">
                <img src="/sample1.jpg" width="200" height="auto" /></a>
                <div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Divider />
                    <h3>Send Comment :</h3>
                    <Input type="txt" label="Title" placeholder="Enter your title" className="py-1" />
                    <Textarea 
          label="Description"
          placeholder="Enter your description"
          className="w-full py-1"
        />
           <Button onClick={()=>fileRef.current.click()}>Add Image  </Button>
           <input type="file" ref={fileRef} className="opacity-0" />
       
         
        
        </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Mark as Not Resolved Issue
                </Button>
                <Button color="success" onPress={onClose}>
                  Mark as Finish
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>)
}