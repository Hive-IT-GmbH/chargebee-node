declare module 'chargebee' {
  export interface Download {
    
    download_url:string;
    valid_till:number;
    mime_type?:string;
  }
  
}