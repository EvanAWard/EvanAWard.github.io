"use strict";(self.webpackChunkapp_efnol=self.webpackChunkapp_efnol||[]).push([[525],{6525:(k,o,c)=>{c.r(o),c.d(o,{SuccessModule:()=>u});var s=c(6895),l=c(6551),p=c(3050),m=c(655),h=c(4253),g=c(5342),e=c(1571),r=c(6386);function f(t,n){if(1&t&&(e.TgZ(0,"div",6)(1,"p",7),e._uU(2,"Your claim number is "),e.TgZ(3,"b"),e._uU(4),e.qZA(),e._uU(5,", and your Claims Specialist will contact you soon."),e.qZA(),e.TgZ(6,"p"),e._uU(7,"There may be a delay in this claim appearing on the Claims Tracker in your account. If so, please call us at "),e.TgZ(8,"a",8),e._uU(9,"866-204-2219"),e.qZA(),e._uU(10," or email "),e.TgZ(11,"a",9),e._uU(12,"claims@kin.com"),e.qZA(),e._uU(13," for updates on your claim."),e.qZA()()),2&t){const i=e.oxw(2);e.xp6(4),e.Oqu(i.claimNumber)}}function _(t,n){1&t&&(e.TgZ(0,"div",6)(1,"p",7),e._uU(2,"Your Claims Specialist will contact you shortly. Keep an eye out for an email with your claim number."),e.qZA(),e.TgZ(3,"p",7),e._uU(4,"Your claim status can be tracked through My Account in your portal once you receive your claim number."),e.qZA(),e.TgZ(5,"p"),e._uU(6,"If you haven\u2019t received your claim number within 2 business days, give us a call at "),e.TgZ(7,"a",8),e._uU(8,"866-204-2219"),e.qZA(),e._uU(9," or email us at "),e.TgZ(10,"a",9),e._uU(11,"claims@kin.com"),e.qZA()()())}const y=function(){return{type:"url",href:"https://app.kin.com/login",label:"Go to My Account"}};function d(t,n){if(1&t&&(e.TgZ(0,"app-kin-bulletin",2)(1,"div",3),e.YNc(2,f,14,1,"div",4),e.YNc(3,_,12,0,"div",5),e.qZA()()),2&t){const i=e.oxw();e.Q6J("ctaConfig",e.DdM(3,y)),e.xp6(2),e.Q6J("ngIf",i.claimNumber),e.xp6(1),e.Q6J("ngIf",!i.claimNumber)}}function b(t,n){if(1&t&&(e.TgZ(0,"div",6)(1,"p",7),e._uU(2,"Please inform the customer of their claim number "),e.TgZ(3,"b"),e._uU(4),e.qZA(),e._uU(5,". To track the status of their claim, the customer can check the Claims Tracker in their account. There may be a delay in this newly reported claim appearing there."),e.qZA()()),2&t){const i=e.oxw(2);e.xp6(4),e.Oqu(i.claimNumber)}}function x(t,n){1&t&&(e.TgZ(0,"div",6)(1,"p",7),e._uU(2,"Your Claims Specialist will contact you shortly. Keep an eye out for an email with your claim number."),e.qZA(),e.TgZ(3,"p",7),e._uU(4,"Your claim status can be tracked through My Account in your portal once you receive your claim number."),e.qZA(),e.TgZ(5,"p"),e._uU(6,"If you haven\u2019t received your claim number within 2 business days, give us a call at "),e.TgZ(7,"a",8),e._uU(8,"866-204-2219"),e.qZA(),e._uU(9," or email us at "),e.TgZ(10,"a",9),e._uU(11,"claims@kin.com"),e.qZA()()())}const T=function(t){return{type:"url",href:t,label:"Exit & Return to Kintranet"}};function Z(t,n){if(1&t&&(e.TgZ(0,"app-kin-bulletin",10)(1,"div",3),e.YNc(2,b,6,1,"div",4),e.YNc(3,x,12,0,"div",5),e.qZA()()),2&t){const i=e.oxw();e.Q6J("ctaConfig",e.VKq(3,T,i.kintranetLink)),e.xp6(2),e.Q6J("ngIf",i.claimNumber),e.xp6(1),e.Q6J("ngIf",!i.claimNumber)}}class a{get isAgent(){return this.appContext.persona.type===h.Fz.KIN_AGENT}get kintranet(){return this.appContext.notProd?"https://app.kin.haus/kintranet":"https://app.kin.com/kintranet"}constructor(n){this.route=n,this.successWithNumber=!1,this.claimNumber=this.route.snapshot.queryParams.claimNumber??null,this.policyNumber=this.route.snapshot.queryParams.policyNumber??null,this.kintranetLink=`${this.kintranet}/search?policy_number=${this.policyNumber}`}ngOnInit(){this.successWithNumber=!!this.claimNumber}}a.\u0275fac=function(n){return new(n||a)(e.Y36(l.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-kin-success"]],inputs:{successWithNumber:"successWithNumber"},decls:2,vars:2,consts:[["icon","check","heading","Success! We Received Your Claim","urlType","url",3,"message","ctaConfig",4,"ngIf"],["icon","check","heading","Success! Claim Filed.","urlType","url",3,"message","ctaConfig",4,"ngIf"],["icon","check","heading","Success! We Received Your Claim","urlType","url",3,"message","ctaConfig"],[1,"vr__x9"],["class","text text__center text__brand-gray lh--1-6 ",4,"ngIf"],["class","text text__center text__brand-gray lh--1-6",4,"ngIf"],[1,"text","text__center","text__brand-gray","lh--1-6"],[1,"vr__x6"],["href","tel:866-204-2219",1,"text__link"],["href","mailTo:claims@kin.com",1,"text__link"],["icon","check","heading","Success! Claim Filed.","urlType","url",3,"message","ctaConfig"]],template:function(n,i){1&n&&(e.YNc(0,d,4,4,"app-kin-bulletin",0),e.YNc(1,Z,4,5,"app-kin-bulletin",1)),2&n&&(e.Q6J("ngIf",!i.isAgent),e.xp6(1),e.Q6J("ngIf",i.isAgent))},dependencies:[s.O5,r.t],changeDetection:0}),(0,m.gn)([(0,g.l)()],a.prototype,"appContext",void 0);const v=[{path:"",component:a}];class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[s.ez,l.Bz.forChild(v),r.t,p.HZ]})}}]);