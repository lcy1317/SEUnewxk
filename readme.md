# SEU系统选课控制台脚本

<font colot = red>系统好像更新了新系统，我看看怎么弄哈</font>

高效，操作简单，代码简洁易懂！求顺手点一下STAR

## 选课脚本

```javascript
async function test() {
    console.log('Hello')
    while (true)
    {
        var tcId = '202020213B07M108003';//这里的数字填写自己想要选的课的ID
        var addParam = buildAddVolunteerParam(tcId);
        addVolunteer(addParam).done(function(resp) { console.log(resp); });
        //如果需要同时抢多门课就顺着写下去就行了
		//tcId = '202020213B07M108003';
        //var addParam = buildAddVolunteerParam(tcId);
        //addVolunteer(addParam).done(function(resp) { console.log(resp); });
        await sleep(1000)//抢课的间隔时间，单位为ms，请不要设置过小
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
test()
```

## 操作说明

![avatar](https://github.com/lcy1317/SEUnewxk/blob/main/image-20210101203813977.png)

- Step1：点击键盘F12找到控制台
- Step2：点击上方箭头指向位置
- Step3：点击后将鼠标移动到你想要的选的课的位置
- Step4：在右侧控制台找到课程ID号

![avatar](https://github.com/lcy1317/SEUnewxk/blob/main/image-20210101204254466.png)

- Step5：复制课程id至代码中tcId变量
- Step6：点击console，将代码复制进去，回车开始选课
- Step7：根据你设定的sleep时间，会每隔如1000ms进行一次选课，在超时被系统退出前你的选课会一直进行

## 补充说明

- 本方法只限于自己使用抢选个别课程，请不要肆意使用
- 本方法有违抢课公平性，请真的有需要再使用
- 退改补实测有效
- 求顺手star一下啦
- 鸣谢某Y大佬（写名字会有事的趴）
