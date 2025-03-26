export interface InputDialogProps {
    title: string;
    description: string;
    placeholder: string;
    open: boolean;
    onSubmit: (value: string) => Promise<void>;
    onOpenChange: (open: boolean) => void;
}
