import { ContextMenu, ContextMenuTrigger, ContextMenuItem, ContextMenuContent } from "@/components/ui/context-menu";
import { SidebarMenuSubItem, SidebarMenuSub, SidebarMenuButton } from "@/components/ui/sidebar";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { PromptMenuItemProps } from "./interface";

export default function PromptMenuItem({ items }: PromptMenuItemProps) {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {items.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuButton>
                                    {item.title}
                                </SidebarMenuButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Item Contenxt</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}