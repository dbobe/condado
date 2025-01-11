import { PlusIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CrudBtnBar() {
  return (
    <div className="flex flex-row gap-2 p-4">
      <Button size="icon">
        <PlusIcon />
      </Button>
      <Button size="icon">
        <PencilIcon />
      </Button>
      <Button size="icon" variant="destructive">
        <TrashIcon />
      </Button>
    </div>
  );
}
