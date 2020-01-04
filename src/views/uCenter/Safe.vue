<template>
    <div class="member_infor_content">
												<div class="tabmenu">
													<ul class="tab pngFix">
																													<li class="active">
																<a href="http://ucenter.jushifang.cn/index.php?ctl=User&amp;met=security">
																	账户安全																</a>
															</li>
																												</ul>
																											    </div>
    <div class="ncm-security-user">
        <h3>您的账户信息</h3>
        <div class="ml30">
            <div class="user-avatar"><span></span></div>
            <div class="user-intro">
                <dl>
                    <dt>登录账号：</dt>
                    <dd>
                        a853779281                    </dd>
                </dl>
                <dl>
                    <dt>绑定邮箱：</dt>
                    <dd>
                                            </dd>
                </dl>
                <dl>
                    <dt>手机号码：</dt>
                    <dd>
                        15869124626                    </dd>
                </dl>
                <dl>
                    <dt>上次登录：</dt>
                    <dd>
                        2019-12-30 11:56:14                        |
                            IP地址:                            101.68.87.26&nbsp;
                                            </dd>
                </dl>
            
            
            </div>
        </div>
    </div>
    <div class="ncm-security-container">
        <div class="title">
            您的安全服务        </div>
                <div class="current low clearfix medium"><!--对此div添加不同等级的class:低（lower）,中（medium）,高（high） -->
            <div class="fl progress">
                <span style="width:50%"></span><!-- 对此span设置宽度百分比 -->
                            
            </div>

           <div class="fl progress-text">安全等级：<strong>中</strong></div>
        
        </div>
         <div class="divleft">
                
                <div class="divright">
                    <span>(建议您开启全部安全设置，以保障账户及资金安全)</span>
                </div>
            
            </div>
            <div class="smrz-box">
            <div class="smrz">
                        <i class="fas fa-dizzy"></i>
                        <span> 实名认证</span>
                        
                    <span>未认证</span>
                        </div>
                        <div class="handle-box">
                    <span class="handle">
                                                                                    <a class="red" href="http://paycenter.jushifang.cn/?ctl=Info&amp;met=account&amp;typ=e">去实名认证</a>
                            
                        </span></div></div>

                
        
        
        
        
                
        <div class="smrz1">
         <div class="email">
             <i class="fas fa-envelope"></i>
              <span> 邮箱绑定</span>
             <span>未绑定</span>
            </div>
                <span class="explain">进行邮箱验证后，可用于接收敏感操作的身份验证信息，以及订阅更优惠商品的促销邮件。</span>
                <span class="handle">
                                    
                                </span>
                                <a href="http://ucenter.jushifang.cn/index.php?ctl=User&amp;met=security&amp;op=email&amp;is_bind=1" class="ncbtn ncbtn-aqua bd  bbc_btns">绑定邮箱</a>
           </div>
    </div>
    
    <div class="smrz1">
         <div class="email">
            <i class="fas fa-mobile-alt"></i>
              <span> 手机绑定</span>
             <span class="active">已绑定</span>
            </div>
                               <span class="explain">进行手机验证后，可用于接收敏感操作的身份验证信息，以及进行积分消费的验证确认，非常有助于保护您的账号和账户财产安全。</span>
                               <div>
               <p class="xgphone">修改手机</p>
           </div>
           </div>
           
    </div>

</template>
<style lang="stylus" scoped>
@import '~assets/stylesheets/buyer.css'
</style>
