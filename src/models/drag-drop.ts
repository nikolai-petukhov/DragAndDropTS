// Drag & Drop Interfaces
namespace App {
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }
    
    export interface DragTarget {
        dragOverHadler(event: DragEvent): void;
        dropHadler(event: DragEvent): void;
        dragLeaveHadler(event: DragEvent): void;
    }
}
