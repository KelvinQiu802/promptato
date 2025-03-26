import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

const AppSidebar = () => {
    return (
        <Sidebar collapsible="none" className="h-screen overflow-y-auto">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <Collapsible defaultOpen className="group/collapsible">
                            <SidebarMenuItem>
                                {/* 这里是父标题 */}
                                <ContextMenu>
                                    <ContextMenuTrigger>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton>
                                                <ChevronDown className="transition-transform group-data-[state=closed]/collapsible:rotate-[-90deg]" />
                                                btn
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <ContextMenuContent>
                                            <ContextMenuItem>Folder Context</ContextMenuItem>
                                        </ContextMenuContent>
                                    </ContextMenuTrigger>
                                </ContextMenu>
                                <ContextMenu>
                                    <ContextMenuTrigger>
                                        {/* 这里是子标题 */}
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {items.map((item) => (
                                                    <SidebarMenuSubItem key={item.title}>
                                                        <SidebarMenuButton onClick={() => { }}>
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
                            </SidebarMenuItem>
                        </Collapsible>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
