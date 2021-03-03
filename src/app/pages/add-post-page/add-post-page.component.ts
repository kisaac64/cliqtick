import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ManagementService } from 'src/app/management.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPostPageComponent implements OnInit {

  constructor(
    public management: ManagementService
  ) { }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'calc(100vh - 428px)',
    minHeight: '',
    maxHeight: '',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: []
  };

  htmlContent = '<h1 class="posttitle" style="box-sizing: inherit; font-size: 2.5rem; margin: 0px 0px 1rem; font-family: &quot;PT Sans&quot;; line-height: 1.1; color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);">TITLE: Post title goes here</h1><h2 class="post-subtitle" style="box-sizing: inherit; margin-top: 0px; margin-bottom: 0.5rem; font-family: &quot;PT Sans&quot;; font-weight: 100; line-height: 1.1; color: rgb(17, 17, 17); font-size: 2rem; background-color: rgb(255, 255, 255);"></h2><p style="box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(102, 102, 102); font-family: &quot;PT Sans&quot;; font-size: 15px; background-color: rgb(255, 255, 255);"><span class="post-date" style="box-sizing: inherit; display: inline-block; color: rgba(0, 0, 0, 0.54);"><time class="post-date" style="box-sizing: inherit;">February 17, 2021</time></span>&nbsp;<span class="dot" style="box-sizing: inherit;"></span>&nbsp;<span class="readingtime" style="box-sizing: inherit; color: rgba(0, 0, 0, 0.54);">5 min read</span>&nbsp;</p><h3 style="box-sizing: inherit; margin-top: 2.5rem; margin-bottom: 2.5rem; font-family: &quot;PT Sans&quot;; line-height: 1.1; color: rgb(17, 17, 17); font-size: 1.75rem; background-color: rgb(255, 255, 255);">Heading 1</h3><p style="box-sizing: inherit; margin-top: 0px; margin-bottom: 2rem; color: rgb(34, 34, 34); font-family: Merriweather; font-size: 18px; background-color: rgb(255, 255, 255);"><span style="color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span><br></p><h3 style="box-sizing: inherit; margin-top: 2.5rem; margin-bottom: 2.5rem; font-family: &quot;PT Sans&quot;; line-height: 1.1; color: rgb(17, 17, 17); font-size: 1.75rem; background-color: rgb(255, 255, 255);">Heading 2</h3><p style="margin-bottom: 2rem; box-sizing: inherit; margin-top: 0px; color: rgb(34, 34, 34); font-family: Merriweather; font-size: 18px; background-color: rgb(255, 255, 255);"><span style="color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></p><h3 style="box-sizing: inherit; margin-top: 2.5rem; margin-bottom: 2.5rem; font-family: &quot;PT Sans&quot;; line-height: 1.1; color: rgb(17, 17, 17); font-size: 1.75rem; background-color: rgb(255, 255, 255);">Conclusion</h3><p style="margin-bottom: 2rem; box-sizing: inherit; margin-top: 0px; color: rgb(34, 34, 34); font-family: Merriweather; font-size: 18px; background-color: rgb(255, 255, 255);"><span style="color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></p>';

  ngOnInit(): void {

    // this.htmlContent = '';

  }

  showAddPost = false;
  closeAddPost(){ this.showAddPost = false; }

}
