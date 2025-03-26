import { ContextMenuItem, ContextMenuTrigger, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PlusCircle } from "lucide-react";
import AppSidebar from "../AppSidebar";

export default function SidebarWrapper() {
    return (
        <SidebarProvider>
            <ContextMenu>
                <ContextMenuTrigger>
                    <AppSidebar />
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>
                        <div className='text-sm flex items-center gap-2'>
                            <PlusCircle className='w-4 h-4' />
                            Global Context
                        </div>
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </SidebarProvider>
    )
}