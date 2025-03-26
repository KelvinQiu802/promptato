import { ContextMenuItem, ContextMenuTrigger, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import AppSidebar from "../AppSidebar";
import { useState } from "react";
import InputDialog from "@/components/CustomDialog/InputDialog/InputDialog";
import { createNewProject } from "@/lib/utils";

export default function SidebarWrapper() {
    const [newProjectDialogOpen, setNewProjectDialogOpen] = useState(false);

    const handleNewProjectSubmit = async (value: string) => {
        await createNewProject(value);
    }

    return (
        <>
            <SidebarProvider>
                <ContextMenu>
                    <ContextMenuTrigger>
                        <AppSidebar />
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <ContextMenuItem onSelect={() => setNewProjectDialogOpen(true)}>
                            <div className='text-sm flex items-center gap-2'>
                                <Plus className='w-4 h-4' />
                                New Project
                            </div>
                        </ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </SidebarProvider>
            <InputDialog
                title="New Project"
                description="Create a new project"
                open={newProjectDialogOpen}
                onSubmit={handleNewProjectSubmit}
                onOpenChange={setNewProjectDialogOpen}
                placeholder="New Project Name"
            />
        </>
    )
}