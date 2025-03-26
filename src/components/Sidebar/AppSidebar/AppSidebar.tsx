import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
} from "@/components/ui/sidebar"
import { Collapsible } from "@/components/ui/collapsible"
import ProjectMenuItem from "../ProjectMenuItem"
import PromptMenuItem from "../PromptMenuItem"

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
                            <ProjectMenuItem title="Folder" />
                            <PromptMenuItem items={items} />
                        </Collapsible>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
