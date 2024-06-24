import { Divider, Listbox, ListboxItem } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Card, CardHeader, CardBody, Image,Input, Textarea} from "@nextui-org/react";
import { useRef } from "react";

export const LatestBug = ()=> {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const fileRef = useRef(null);
    return (<div className="flex py-4 flex-col px-4 ">
        <h2>Latest Bugs</h2>
        <Listbox variant="flat" aria-label="Listbox menu with descriptions">
            <ListboxItem  >
                 <Button onPress={onOpen} color="danger"> Lorem ipsum dolor sit amet, consectetur adipiscing</Button>
               
            </ListboxItem>
            <ListboxItem
                     

            >
                <Button onPress={onOpen} color="secondary"> Sample not resolved Nulla hendrerit arcu eu mi finibus</Button>
            </ListboxItem>
            <ListboxItem
               
                showDivider
              

            >
                 <Button onPress={onOpen} color="danger">Cras volutpat massa nec orci </Button>
            </ListboxItem>

        </Listbox>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" scrollBehavior="outside">
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
                <Divider />

                <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">2024/12/03</p>
       
        <h4 className="font-bold text-large">Lorem ipsum dolor sit amet</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/sample1.jpg"
          width={270}
        />
         <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
               
      </CardBody>
    </Card>
    
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">2024/12/03</p>
       
        <h4 className="font-bold text-large">Lorem ipsum dolor sit amet</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/sample1.jpg"
          width={270}
        />
         <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
               
      </CardBody>
    </Card>
    

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

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="warning" onPress={onClose}>
                  Mark as Solved
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>)
}