import { ContextMenu, ContextMenuItem, ContextMenuTrigger, ContextMenuContent } from "@/components/ui/context-menu";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { FolderMenuItemProps } from "./interface";

export default function FolderMenuItem({ title }: FolderMenuItemProps) {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <CollapsibleTrigger asChild>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <ChevronDown className="transition-transform group-data-[state=closed]/collapsible:rotate-[-90deg]" />
                            {title}
                        </SidebarMenuButton>
                    </ SidebarMenuItem>
                </CollapsibleTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Folder Context</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenuTrigger>
        </ContextMenu>
    )
}