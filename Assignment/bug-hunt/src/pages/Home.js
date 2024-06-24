import { Nav } from "../components/Nav"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { LatestBug } from "../components/LatestBug";
import { SolveBug } from "../components/SolveBug";
import { FixedBug } from "../components/FixedBug";


export const Home = () => (
    <div class="container mx-auto">
        <div className="min-h-screen h-full flex flex-col">
            <Nav />

            <Divider  />
            <div className="flex justify-center justify-items-center">
                <LatestBug />
                <SolveBug />
               <FixedBug />
            </div>
        </div>
    </div>)