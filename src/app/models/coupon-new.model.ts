import { Category } from "./category.model";

export class CouponNew {
    code:string="CODE";
    company:string="amazon";
    category:Category =Category.Clothing;
    couponname:string="CODE";
    description:string="abcd";
    startDate: Date = new Date();
     endDate:Date =new Date(this.startDate.getFullYear()+1,this.startDate.getMonth(),this.startDate.getDate());
    offer:number =40;
    url:string="www.google.com"
    imagename:string="";

    imagetype:string="";
    constructor()
    {}
    // constructor(code: string,company: string,category:Category,couponname:string,description:string,
    //     startDate: Date,endDate:Date,offer:number)
    // {
    //     this.code=code;
    //     this.company=company;
    //     this.category=category;
    //     this.couponname=couponname;
    //     this.description=description
    //     this.startDate=startDate;
    //     this.endDate=endDate
    //     this.offer=offer


    // }
}