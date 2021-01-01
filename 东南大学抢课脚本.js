async function test() {
    console.log('Hello')
    while (true)
    {
        var tcId = '202020213B042307001';//这里的数字填写自己想要选的课的ID
        var addParam = buildAddVolunteerParam(tcId);
        addVolunteer(addParam).done(function(resp) { console.log(resp); });
        //如果需要同时抢多门课就顺着写下去就行了
		//tcId = '202020213B042315001';
        //var addParam = buildAddVolunteerParam(tcId);
        //addVolunteer(addParam).done(function(resp) { console.log(resp); });
        await sleep(1000)//抢课的间隔时间，单位为ms，请不要设置过小
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
test()