///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Coupon {
    
    /**
      * @description Used to uniquely identify the coupon in your website/application and to integrate with Chargebee.  
**Note:**


When the coupon ID contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the coupon ID in the path parameter before making an API call.

      */
    
    id:string;
    
    /**
      * @description The display name used in web interface for identifying the coupon.  
**Note:**


When the name of the coupon set contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the name of the coupon set in the path parameter before making an API call.

      */
    
    name:string;
    
    /**
      * @description Display name used in invoice. If it is not configured then name is used in invoice.

      */
    
    invoice_name?:string;
    
    /**
      * @description The type of deduction \* percentage - The specified percentage will be deducted. \* fixed_amount - The specified amount will be deducted.

      */
    
    discount_type:'fixed_amount' | 'percentage';
    
    /**
      * @description The percentage of the original amount that should be deducted from it.

      */
    
    discount_percentage?:number;
    
    /**
      * @description The value of the deduction. The format of this value depends on the [kind of currency](/docs/api#currencies).

      */
    
    discount_amount?:number;
    
    /**
      * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.

      */
    
    currency_code?:string;
    
    /**
      * @description Specifies the time duration for which this coupon is attached to the subscription. \* forever - The coupon is attached to the subscription and applied on the invoices until explicitly removed. \* one_time - The coupon stays attached to the subscription till it is applied on an invoice **once** . It is removed after that from the subscription. \* limited_period - The discount is attached to the subscription and applied on the invoices for a limited duration. This duration starts from the point it is applied to an invoice for the first time and expires after a period specified by &#x60;period&#x60; and &#x60;period_unit&#x60;.

      */
    
    duration_type:'limited_period' | 'one_time' | 'forever';
    
    /**
      * @description Date upto which the coupon can be applied to new subscriptions.

      */
    
    valid_till?:number;
    
    /**
      * @description Maximum number of times this coupon can be redeemed.  
**Note:**


If not specified, the coupon can be redeemed an indefinite number of times.

      */
    
    max_redemptions?:number;
    
    /**
      * @description Status of the coupon. \* expired - Cannot be applied to a subscription. A coupon may expire due to exceeding [max_redemptions](/docs/api/coupons?#coupon_max_redemptions) or [valid_till](/docs/api/coupons?#coupon_valid_till) date is past. Existing associations remain unaffected. \* archived - Cannot be applied to a subscription. Existing associations remain unaffected. \* active - Can be applied to a subscription. \* deleted - Indicates the coupon has been deleted.

      */
    
    status?:'archived' | 'expired' | 'deleted' | 'active';
    
    /**
      * @description The amount on the invoice to which the coupon is applied. \* invoice_amount - The coupon is applied to the invoice &#x60;sub_total&#x60;. \* each_specified_item - The coupon is applied to the &#x60;invoice.line_item.amount&#x60; that corresponds to the item price specified by &#x60;item_price_id&#x60;.

      */
    
    apply_on:'invoice_amount' | 'each_specified_item';
    
    /**
      * @description Timestamp indicating when this coupon is created.

      */
    
    created_at:number;
    
    /**
      * @description Timestamp indicating when this coupon was archived.

      */
    
    archived_at?:number;
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this coupon was last updated.   
Note that this does not change when the [redemptions](/docs/api/coupons?#coupon_redemptions) attribute is changed. This attribute will be present only if the resource has been updated after 2016-11-09.

      */
    
    updated_at?:number;
    
    /**
      * @description The duration of time for which the coupon is attached to the subscription, in &#x60;period_units&#x60;. Applicable only when [duration_type](/docs/api/coupons?#coupon_duration_type) is [limited_period](/docs/api/coupons?#coupon_duration_type).

      */
    
    period?:number;
    
    /**
      * @description The unit of time for period. Applicable only when [duration_type](/docs/api/coupons?#coupon_duration_type) is [limited_period](/docs/api/coupons?#coupon_duration_type). \* month - A period of 1 calendar month. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours.

      */
    
    period_unit?:PeriodUnit;
    
    /**
      * @description The number of times this coupon has been redeemed.

      */
    
    redemptions?:number;
    
    /**
      * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

      */
    
    invoice_notes?:string;
    
    /**
      * @description The list of item constraints.

      */
    
    item_constraints?:Coupon.ItemConstraint[];
    
    /**
      * @description The list of item constraint criteria.

      */
    
    item_constraint_criteria?:Coupon.ItemConstraintCriteria[];
    
    /**
      * @description List of constraints applicable on the redemption of this coupon.

      */
    
    coupon_constraints?:Coupon.CouponConstraint[];
  }
  export namespace Coupon {
    export class CouponResource {  
      /**
        * @description List all the available coupons that are created for a specific promotion or offers. You can find list of coupon codes that are currently active, expired, archived or deleted.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This API updates a coupon that is created for a specific promotion or offers.

        */
      
      update_for_items(coupon_id:string, input?:UpdateForItemsInputParam):ChargebeeRequest<UpdateForItemsResponse>;
       
      /**
        * @description This API unarchives a specific coupon using the coupon ID.

        */
      
      unarchive(coupon_id:string):ChargebeeRequest<UnarchiveResponse>;
       
      /**
        * @description If no Subscriptions/Invoices are linked to this Coupon, the Coupon will be deleted from your Chargebee site. This action cannot be undone.

To ensure that existing Subscriptions/Invoices are not affected, Coupons associated with them will not be deleted, but moved to &quot;Archived&quot; state. Once a Coupon has been archived, it cannot be edited or used again unless [unarchived](coupons#unarchive_a_coupon). Unused Coupons codes are deleted.

        */
      
      delete(coupon_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Copies a coupon over from one site to another. Copying of [archived](./coupons?prod_cat_ver&#x3D;2#coupon_status) coupons is not supported.

The item prices that are linked to the coupon in the source site are also linked to the coupon in the destination site. However, this will only work if those item prices exist and with the same [ids](./item_prices?prod_cat_ver&#x3D;2#item_price_id), in the destination site. Hence, it is recommended that the item prices be copied over before copying the coupons.

The value for [redemptions](./coupons?prod_cat_ver&#x3D;2#coupon_redemptions) is not copied. It is set to &#x60;0&#x60; for the newly created coupon. Hence, if such a coupon had &#x60;expired&#x60; in the source site due to &#x60;redemptions&#x60; having reached [max_redemptions](./coupons?prod_cat_ver&#x3D;2#coupon_max_redemptions), it&#x27;s [status](./coupons?prod_cat_ver&#x3D;2#coupon_status) would be &#x60;active&#x60; in the destination site.


        */
      
      copy(input:CopyInputParam):ChargebeeRequest<CopyResponse>;
       
      /**
        * @description This API retrieves a specific coupon using the coupon ID.

        */
      
      retrieve(coupon_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description This API creates a new coupon for a specific promotion or offers.

        */
      
      create_for_items(input:CreateForItemsInputParam):ChargebeeRequest<CreateForItemsResponse>;
    }
    export interface ListResponse {  
      /**
        * @description List all the available coupons that are created for a specific promotion or offers. You can find list of coupon codes that are currently active, expired, archived or deleted.

        */
       
       list:{coupon:Coupon}[];
       
      /**
        * @description List all the available coupons that are created for a specific promotion or offers. You can find list of coupon codes that are currently active, expired, archived or deleted.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Used to uniquely identify the coupon in your website/application and to integrate with Chargebee.  
**Note:**


When the coupon ID contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the coupon ID in the path parameter before making an API call.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The display name used in web interface for identifying the coupon.  
**Note:**


When the name of the coupon set contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the name of the coupon set in the path parameter before making an API call.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The type of deduction

        */
        
      discount_type?:{in?:string,is?:'fixed_amount' | 'percentage',is_not?:'fixed_amount' | 'percentage',not_in?:string};
       
      /**
        * @description Specifies the time duration for which this coupon is attached to the subscription.

        */
        
      duration_type?:{in?:string,is?:'limited_period' | 'one_time' | 'forever',is_not?:'limited_period' | 'one_time' | 'forever',not_in?:string};
       
      /**
        * @description Status of the coupon.

        */
        
      status?:{in?:string,is?:'archived' | 'expired' | 'deleted' | 'active',is_not?:'archived' | 'expired' | 'deleted' | 'active',not_in?:string};
       
      /**
        * @description The amount on the invoice to which the coupon is applied.

        */
        
      apply_on?:{in?:string,is?:'invoice_amount' | 'each_specified_item',is_not?:'invoice_amount' | 'each_specified_item',not_in?:string};
       
      /**
        * @description Timestamp indicating when this coupon is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-11-09.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description List all the available coupons that are created for a specific promotion or offers. You can find list of coupon codes that are currently active, expired, archived or deleted.

        */
        
      sort_by?:{asc?:'created_at',desc?:'created_at'};
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.

        */
        
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Parameters for addon

        */
        
      addon?:{};
       
      /**
        * @description Parameters for plan

        */
        
      plan?:{};
    }
    export interface UpdateForItemsResponse {  
       coupon:Coupon;
    }
    export interface UpdateForItemsInputParam {
       
      /**
        * @description The display name used in web interface for identifying the coupon.  
**Note:**


When the name of the coupon set contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the name of the coupon set in the path parameter before making an API call.
.

        */
       
      name?:string;
       
      /**
        * @description Display name used in invoice. If it is not configured then name is used in invoice.

        */
       
      invoice_name?:string;
       
      /**
        * @description The type of deduction. \* percentage - The specified percentage will be deducted. \* fixed_amount - The specified amount will be deducted. \* offer_quantity - The specified units will be offered for free.

        */
       
      discount_type?:'fixed_amount' | 'percentage';
       
      /**
        * @description The value of the deduction. The format of this value depends on the [kind of currency](/docs/api#currencies).

        */
       
      discount_amount?:number;
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/2.0/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.

        */
       
      currency_code?:string;
       
      /**
        * @description The percentage of the original amount that should be deducted from it.

        */
       
      discount_percentage?:number;
       
      /**
        * @description The amount on the invoice to which the coupon is applied. \* invoice_amount - The coupon is applied to the invoice &#x60;sub_total&#x60;. \* each_unit_of_specified_items - Discount will be applied to each unit of plan and addon items specified. \* each_specified_item - The coupon is applied to the &#x60;invoice.line_item.amount&#x60; that corresponds to the item price specified by &#x60;item_price_id&#x60;. \* specified_items_total - Discount will be applied to the total of plan and addon items specified.

        */
       
      apply_on?:'invoice_amount' | 'each_specified_item';
       
      /**
        * @description Specifies the time duration for which this coupon is attached to the subscription. \* forever - The coupon is attached to the subscription and applied on the invoices until explicitly removed. \* one_time - The coupon stays attached to the subscription till it is applied on an invoice **once** . It is removed after that from the subscription. \* limited_period - The discount is attached to the subscription and applied on the invoices for a limited duration. This duration starts from the point it is applied to an invoice for the first time and expires after a period specified by &#x60;period&#x60; and &#x60;period_unit&#x60;.

        */
       
      duration_type?:'limited_period' | 'one_time' | 'forever';
       
      /**
        * @description **(Deprecated)** The duration of time in months for which the coupon is attached to the subscription. Applicable only when &#x60;duration_type&#x60; is &#x60;limited_period&#x60;.   
**Note:** This parameter has been deprecated. Use &#x60;period&#x60; and &#x60;period_unit&#x60; instead.

        */
       
      duration_month?:number;
       
      /**
        * @description Date upto which the coupon can be applied to new subscriptions.

        */
       
      valid_till?:number;
       
      /**
        * @description Maximum number of times this coupon can be redeemed.  
**Note:**


If not specified, the coupon can be redeemed an indefinite number of times.
.

        */
       
      max_redemptions?:number;
       
      /**
        * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

        */
       
      invoice_notes?:string;
       
      /**
        * @description A set of key-value pairs stored as additional information for the coupon. [Learn more](./#meta_data).

        */
       
      meta_data?:object;
       
      /**
        * @description The coupon is included in MRR calculations for your site. This attribute is only applicable for coupons of &#x60;duration_type &#x3D; one_time&#x60; and when the feature is enabled in Chargebee. Note: If the site-level setting is to exclude one-time coupons from MRR calculations, this value is always returned &#x60;false&#x60;.

        */
       
      included_in_mrr?:boolean;
       
      /**
        * @description The duration of time for which the coupon is attached to the subscription, in &#x60;period_units&#x60;. Applicable only when [duration_type](/docs/api/coupons?#coupon_duration_type) is [limited_period](/docs/api/coupons?#coupon_duration_type).

        */
       
      period?:number;
       
      /**
        * @description The unit of time for period. Applicable only when [duration_type](/docs/api/coupons?#coupon_duration_type) is [limited_period](/docs/api/coupons?#coupon_duration_type). \* month - A period of 1 calendar month. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours.

        */
       
      period_unit?:PeriodUnit;
       
      /**
        * @description Parameters for item_constraints

        */
       
      item_constraints?:{constraint:'all' | 'criteria' | 'none' | 'specific',item_price_ids?:any[],item_type:'charge' | 'addon' | 'plan'}[];
       
      /**
        * @description Parameters for item_constraint_criteria

        */
       
      item_constraint_criteria?:{currencies?:any[],item_family_ids?:any[],item_price_periods?:any[],item_type?:'charge' | 'addon' | 'plan'}[];
       
      /**
        * @description Parameters for &#x60;coupon_constraints&#x60;. Multiple &#x60;coupon_constraints&#x60; can be passed by specifying unique indices.

        */
       
      coupon_constraints?:{entity_type:'customer',type:'max_redemptions' | 'unique_by',value?:string}[];
    }
    export interface UnarchiveResponse {  
       coupon:Coupon;
    }
    
    export interface DeleteResponse {  
       coupon:Coupon;
    }
    
    export interface CopyResponse {  
       coupon:Coupon;
    }
    export interface CopyInputParam {
       
      /**
        * @description Your Chargebee site name having the coupon to be copied.  
**Note:** Unless you are copying from a twin site (acme \&amp; acme-test are twin sites), [contact support](https://chargebee.freshdesk.com/support/home) to have this allow-listed.

        */
       
      from_site:string;
       
      /**
        * @description Id of the coupon to be copied. The new coupon created in this site will have the same Id.

        */
       
      id_at_from_site:string;
       
      /**
        * @description Id of copied coupon in this site.

        */
       
      id?:string;
       
      /**
        * @description If copy action is performed as part of Chargebee site merge action, pass the value as true.  
**Note:** If this parameter is passed true coupon state, redemptions, coupon set and coupon codes associated with this coupon will be copied.

        */
       
      for_site_merging?:boolean;
    }
    export interface RetrieveResponse {  
       coupon:Coupon;
    }
    
    export interface CreateForItemsResponse {  
       coupon:Coupon;
    }
    export interface CreateForItemsInputParam {
       
      /**
        * @description Used to uniquely identify the coupon in your website/application and to integrate with Chargebee.  
**Note:**


When the coupon ID contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the coupon ID in the path parameter before making an API call.
.

        */
       
      id:string;
       
      /**
        * @description The display name used in web interface for identifying the coupon.  
**Note:**


When the name of the coupon set contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the name of the coupon set in the path parameter before making an API call.
.

        */
       
      name:string;
       
      /**
        * @description Display name used in invoice. If it is not configured then name is used in invoice.

        */
       
      invoice_name?:string;
       
      /**
        * @description The type of deduction. \* percentage - The specified percentage will be deducted. \* fixed_amount - The specified amount will be deducted. \* offer_quantity - The specified units will be offered for free.

        */
       
      discount_type:'fixed_amount' | 'percentage';
       
      /**
        * @description The value of the deduction. The format of this value depends on the [kind of currency](/docs/api#currencies).

        */
       
      discount_amount?:number;
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/2.0/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.

        */
       
      currency_code?:string;
       
      /**
        * @description The percentage of the original amount that should be deducted from it.

        */
       
      discount_percentage?:number;
       
      /**
        * @description The amount on the invoice to which the coupon is applied. \* invoice_amount - The coupon is applied to the invoice &#x60;sub_total&#x60;. \* each_unit_of_specified_items - Discount will be applied to each unit of plan and addon items specified. \* each_specified_item - The coupon is applied to the &#x60;invoice.line_item.amount&#x60; that corresponds to the item price specified by &#x60;item_price_id&#x60;. \* specified_items_total - Discount will be applied to the total of plan and addon items specified.

        */
       
      apply_on:'invoice_amount' | 'each_specified_item';
       
      /**
        * @description Specifies the time duration for which this coupon is attached to the subscription. \* forever - The coupon is attached to the subscription and applied on the invoices until explicitly removed. \* one_time - The coupon stays attached to the subscription till it is applied on an invoice **once** . It is removed after that from the subscription. \* limited_period - The discount is attached to the subscription and applied on the invoices for a limited duration. This duration starts from the point it is applied to an invoice for the first time and expires after a period specified by &#x60;period&#x60; and &#x60;period_unit&#x60;.

        */
       
      duration_type:'limited_period' | 'one_time' | 'forever';
       
      /**
        * @description **(Deprecated)** The duration of time in months for which the coupon is attached to the subscription. Applicable only when &#x60;duration_type&#x60; is &#x60;limited_period&#x60;.   
**Note:** This parameter has been deprecated. Use &#x60;period&#x60; and &#x60;period_unit&#x60; instead.

        */
       
      duration_month?:number;
       
      /**
        * @description Date upto which the coupon can be applied to new subscriptions.

        */
       
      valid_till?:number;
       
      /**
        * @description Maximum number of times this coupon can be redeemed.  
**Note:**


If not specified, the coupon can be redeemed an indefinite number of times.
.

        */
       
      max_redemptions?:number;
       
      /**
        * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

        */
       
      invoice_notes?:string;
       
      /**
        * @description A set of key-value pairs stored as additional information for the coupon. [Learn more](./#meta_data).

        */
       
      meta_data?:object;
       
      /**
        * @description The coupon is included in MRR calculations for your site. This attribute is only applicable for coupons of &#x60;duration_type &#x3D; one_time&#x60; and when the feature is enabled in Chargebee. Note: If the site-level setting is to exclude one-time coupons from MRR calculations, this value is always returned &#x60;false&#x60;.

        */
       
      included_in_mrr?:boolean;
       
      /**
        * @description The duration of time for which the coupon is attached to the subscription, in &#x60;period_units&#x60;. Applicable only when [duration_type](/docs/api/coupons?#coupon_duration_type) is [limited_period](/docs/api/coupons?#coupon_duration_type).

        */
       
      period?:number;
       
      /**
        * @description The unit of time for period. Applicable only when [duration_type](/docs/api/coupons?#coupon_duration_type) is [limited_period](/docs/api/coupons?#coupon_duration_type). \* month - A period of 1 calendar month. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours.

        */
       
      period_unit?:PeriodUnit;
       
      /**
        * @description Status of the coupon. \* expired - Cannot be applied to a subscription. A coupon may expire due to exceeding [max_redemptions](/docs/api/coupons?#coupon_max_redemptions) or [valid_till](/docs/api/coupons?#coupon_valid_till) date is past. Existing associations remain unaffected. \* archived - Cannot be applied to a subscription. Existing associations remain unaffected. \* active - Can be applied to a subscription. \* deleted - Indicates the coupon has been deleted.

        */
       
      status?:'archived' | 'active';
       
      /**
        * @description Parameters for item_constraints

        */
       
      item_constraints?:{constraint:'all' | 'criteria' | 'none' | 'specific',item_price_ids?:any[],item_type:'charge' | 'addon' | 'plan'}[];
       
      /**
        * @description Parameters for item_constraint_criteria

        */
       
      item_constraint_criteria?:{currencies?:any[],item_family_ids?:any[],item_price_periods?:any[],item_type?:'charge' | 'addon' | 'plan'}[];
       
      /**
        * @description Parameters for &#x60;coupon_constraints&#x60;. Multiple &#x60;coupon_constraints&#x60; can be passed by specifying unique indices.

        */
       
      coupon_constraints?:{entity_type:'customer',type:'max_redemptions' | 'unique_by',value?:string}[];
    }
    export interface ItemConstraint {  
      item_type?:'charge' | 'addon' | 'plan';
       
      constraint?:'all' | 'criteria' | 'none' | 'specific';
       
      item_price_ids?:any[];
    }
    export interface ItemConstraintCriteria {  
      item_type?:'charge' | 'addon' | 'plan';
       
      currencies?:any[];
       
      item_family_ids?:any[];
       
      item_price_periods?:any[];
    }
    export interface CouponConstraint {  
      entity_type?:'customer';
       
      type?:'max_redemptions' | 'unique_by';
       
      value?:string;
    }
  }
}