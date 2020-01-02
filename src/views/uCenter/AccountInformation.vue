<template>
    <div>
        <div class="content">
            <dl class="list">
                <dt>用户名称：</dt>
                <dd>
                    <span class="w400">chushi_8bc57b72e2709&nbsp;&nbsp;
                    </span>
                    <span class="nc-grade-mini bbc_bg" style="cursor:pointer;">
                        注册会员                                                    
                    </span>
                    <!--<span class="midisplay">&nbsp;&nbsp;</span>-->
                </dd>
            </dl>
            <dl class="list">
                <dt>昵称：</dt>
                <dd>
                    <span class="w400">
                            <input type="text" class="text n-valid" maxlength="20" name="nickname" value="">
                            <span class="msg-box n-right" style="display: none;" for="nickname"></span>
                    </span>
                </dd>
            </dl>
            <dl class="list">
                <dt>手机：</dt>
                <dd><span class="w400">18856038824&nbsp;&nbsp;
                    <a href="http://ucenter.jushifang.cn/index.php?ctl=User&amp;met=security&amp;op=mobile">
                        修改手机</a>
                        </span>
                    <!--<span class="midisplay">
                        <select name="privacy[user_privacy_mobile]">
                        
                            <option value="0" selected="selected"></option>
                            <option value="1" selected="selected"></option>
                            <option value="2" selected="selected"></option>
                        </select>
                        </span>-->
                </dd>
            </dl>
            <dl class="list">
                <dt>真实姓名：</dt>
                <dd><span class="w400">
                            <input type="text" class="text" maxlength="20" name="user_truename" value="">
                            </span>
                    <!--<span class="midisplay">
                            <select name="privacy[user_privacy_realname]">
                            <option value="0" selected="selected"></option>
                            <option value="1" selected="selected"></option>
                            <option value="2" selected="selected"></option>
                            </select>
                            </span>-->
                </dd>
            </dl>
            <dl class="list">
                <dt>性别：</dt>
                <dd>
                    <span class="w400">
                        <label>
                            <input type="radio" name="user_gender" value="0" checked="">
                            女</label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" name="user_gender" value="1">
                            男</label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" name="user_gender" value="2">
                        保密</label>
                    </span>
                    <!--<span class="midisplay">
                            <select name="privacy[user_privacy_sex]">
                            <option value="0" selected="selected"></option>
                            <option value="1" selected="selected"></option>
                            <option value="2" selected="selected"></option>
                            </select>
                            </span>-->
                </dd>
            </dl>
            <dl class="list">
                <dt>生日：</dt>
                <dd><span class="w400"><select id="birthdayYear" name="year"><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option></select>
                            <label>年</label>
                            <select id="birthdayMonth" name="month"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
                            <label>月</label>
                            <select id="birthdayDay" name="day"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                            <label>日</label>
                        <!--<b class="kbs"></b></span>-->
                        <!--<span class="midisplay">
                            <select name="privacy[user_privacy_birthday]">
                            <option value="0" selected="selected" ></option>
                            <option value="1" selected="selected"></option>
                            <option value="2" selected="selected"></option>
                            </select>
                            </span>-->
                </span></dd>
            </dl>
            <dl class="list">
                <dt>所在地区：</dt>
                <dd>
                    <span class="w400">
                        <!-- <input type="hidden" name="address_area" id="t" value="安徽 合肥市 包河区">
                        <input type="hidden" name="province_id" id="id_1" value="12">
                        <input type="hidden" name="city_id" id="id_2" value="186">
                        <input type="hidden" name="area_id" id="id_3" value="2224"> -->
                        <div id="d_2" class="">
                                <select id="select_1" name="select_1" onchange="district(this);" aria-required="true" class="n-valid">
                                    <option value="" class="">--请选择--</option>
                                    <option value="1|1" class="">北京</option>
                                    <option value="20|1" class="">广西</option>
                                    <option value="21|1" class="">海南</option>
                                    <option value="22|1" class="">重庆</option>
                                    <option value="23|1" class="">四川</option>
                                    <option value="24|1" class="">贵州</option>
                                    <option value="25|1" class="">云南</option>
                                    <option value="26|1" class="">西藏</option>
                                    <option value="27|1" class="">陕西</option>
                                    <option value="28|1" class="">甘肃</option>
                                    <option value="29|1" class="">青海</option>
                                    <option value="30|1" class="">宁夏</option>
                                    <option value="31|1" class="">新疆</option>
                                    <option value="32|1" class="">台湾</option>
                                    <option value="33|1" class="">香港</option>
                                    <option value="34|1" class="">澳门</option>
                                    <option value="19|1" class="">广东</option>
                                    <option value="18|1" class="">湖南</option>
                                    <option value="17|1" class="">湖北</option>
                                    <option value="2|1" class="">天津</option>
                                    <option value="3|1" class="">河北</option>
                                    <option value="4|1" class="">山西</option>
                                    <option value="5|1" class="">内蒙古</option>
                                    <option value="6|1" class="">辽宁</option>
                                    <option value="7|1" class="">吉林</option>
                                    <option value="8|1" class="">黑龙江</option>
                                    <option value="9|1" class="">上海</option>
                                    <option value="10|1" class="">江苏</option>
                                    <option value="11|1" class="">浙江</option>
                                    <option value="12|1" class="classClick">安徽</option>
                                    <option value="13|1" class="">福建</option>
                                    <option value="14|1" class="">江西</option>
                                    <option value="15|1" class="">山东</option>
                                    <option value="16|1" class="">河南</option>
                                    <option value="35|1" class="">海外</option>
                                                            </select><span class="msg-box n-right" style="display: none;" for="select_1"></span>
                                <select id="select_2" name="select_2" onchange="district(this);" style="" aria-required="true" class="n-valid"><option value="" class="">--请选择--</option><option value="186|2" class="classClick">合肥市</option><option value="201|2" class="">池州市</option><option value="200|2" class="">亳州市</option><option value="199|2" class="">六安市</option><option value="198|2" class="">巢湖市</option><option value="197|2" class="">宿州市</option><option value="196|2" class="">阜阳市</option><option value="195|2" class="">滁州市</option><option value="194|2" class="">黄山市</option><option value="193|2" class="">安庆市</option><option value="192|2" class="">铜陵市</option><option value="191|2" class="">淮北市</option><option value="190|2" class="">马鞍山市</option><option value="189|2" class="">淮南市</option><option value="188|2" class="">蚌埠市</option><option value="187|2" class="">芜湖市</option><option value="202|2" class="">宣城市</option></select><span class="msg-box n-right" style="display: none;" for="select_2"><span class="msg-wrap n-error" role="alert"><span class="n-arrow"><b>◆</b><i>◆</i></span><span class="n-icon"></span><span class="n-msg">不能为空</span></span></span>
                                <select id="select_3" name="select_3" onchange="district(this);" style="display: inline-block;" aria-required="true" class="n-valid"><option value="" class="">--请选择--</option><option value="2224|3" class="classClick">包河区</option><option value="2225|3" class="">庐阳区</option><option value="2226|3" class="">瑶海区</option><option value="2227|3" class="">肥东县</option><option value="2228|3" class="">肥西县</option><option value="2229|3" class="">蜀山区</option><option value="2230|3" class="">长丰县</option></select><span class="msg-box n-right" style="display: none;" for="select_3"></span>
                        </div>
                    </span>
                    <!--<span class="midisplay">
                            <select name="privacy[user_privacy_area]">
                            <option value="0" selected="selected"></option>
                            <option value="1" selected="selected"></option>
                            <option value="2" selected="selected"></option>
                            </select>
                            </span>-->
                </dd>
            </dl>
            <dl class="list">
                <dt>QQ：</dt>
                <dd>
                    <span class="w400">
                        <input type="text" class="text" maxlength="30" name="user_qq" id="user_qq" value="">
                    </span>
                </dd>
            </dl>
            <dl class="bottom">
                <dt></dt>
                <dd>
                    <label class="submit-border">
                        <input type="submit" class="submit bbc_btns" value="保存修改"> 
                    </label>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    // @import '~@/assets/stylesheets/UCenter.css'
    .content
        display flex
        flex-direction column
        .list
            display flex


</style>