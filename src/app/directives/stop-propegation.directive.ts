import {Directive, HostListener} from "@angular/core";
    
@Directive({
    selector: "[click-stop-propagation]"
})
export class ClickStopPropagation
{
    @HostListener("contextmenu", ["$event"])
    public onClick(event: any): void
    {
      const contextMenu: HTMLDivElement = document.querySelector(
        '.context-menu-wrapper'
      )! as HTMLDivElement;
      contextMenu.style.left = '-214214141';
      event.stopPropagation();
      event.preventDefault();
    }
}