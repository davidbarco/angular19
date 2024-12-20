import { Component, Input } from "@angular/core";
import { VideoResponse } from "../../interfaces/videosDetail.movie";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-iframe-video-detail",
  imports: [],
  templateUrl: "./iframe-video-detail.component.html",
  styleUrl: "./iframe-video-detail.component.css",
})
export class IframeVideoDetailComponent {
  @Input() videos: VideoResponse | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(videoKey: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
