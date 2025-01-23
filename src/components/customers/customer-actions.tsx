export function CustomerActions() {
  return (
    <div className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {}}
          disabled={isEditing}
          className="size-10"
          title="Add a new contact"
          aria-label="Add a new contact"
        >
          <Plus className="size-6" />
        </Button>
        <Button
          variant="outline"
          onClick={() => setIsEditing(!isEditing)}
          className={cn(
            "size-10",
            isEditing &&
              "bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground/80"
          )}
          title={isEditing ? "Cancel editing" : "Edit customer details"}
          aria-label={isEditing ? "Cancel editing" : "Edit customer details"}
        >
          {isEditing ? <X className="size-6" /> : <Pencil className="size-6" />}
        </Button>
        <Button
          variant="outline"
          onClick={() => setIsEditing(false)}
          disabled={!isEditing}
          className="size-10"
          title="Save customer details"
          aria-label="Save customer details"
        >
          <Save className="size-6" />
        </Button>
        <Button
          variant="outline"
          onClick={() => {}}
          className="size-10 text-destructive hover:text-destructive-foreground hover:bg-destructive"
          title="Delete customer"
          aria-label="Delete customer"
        >
          <Trash2 className="size-6" />
        </Button>
      </div>
    </div>
  );
}
