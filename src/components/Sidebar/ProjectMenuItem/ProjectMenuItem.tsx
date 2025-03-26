import { ContextMenu, ContextMenuItem, ContextMenuTrigger, ContextMenuContent } from "@/components/ui/context-menu";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { ProjectMenuItemProps } from "./interface";

export default function ProjectMenuItem({ title }: ProjectMenuItemProps) {
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
                    <ContextMenuItem>Create a </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenuTrigger>
        </ContextMenu>
    )
}