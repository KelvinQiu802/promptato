import { Dialog, DialogDescription, DialogTitle, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { InputDialogProps } from "./interface";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

/**
 * Specially handles various single-line input dialogs
 */
export default function InputDialog({ title, description, open, placeholder, onSubmit, onOpenChange }: InputDialogProps) {
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        await onSubmit(value); // Call the onSubmit function
        setIsLoading(false);
        handleOpenChange(false); // Close the dialog after submission
    }

    const handleOpenChange = (open: boolean) => {
        onOpenChange(open);
        setValue("");
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <Input autoFocus type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
                <DialogFooter>
                    <Button className="w-24" onClick={handleSubmit} disabled={value.trim() === "" || isLoading}>
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}