var now1 = new Date();

function createtime1() {
    var grt = new Date("03/14/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎光临 坠入星野的月🌙 的控制台!`,
        `🎉🎉🎉`,
        `


██╗   ██╗███████╗██╗  ██╗████████╗███████╗
██║   ██║██╔════╝██║  ██║╚══██╔══╝██╔════╝
██║   ██║█████╗  ███████║   ██║   █████╗  
██║   ██║██╔══╝  ╚════██║   ██║   ██╔══╝  
╚██████╔╝██║          ██║   ██║   ███████╗
 ╚═════╝ ╚═╝          ╚═╝   ╚═╝   ╚══════╝
                                                  
                                                                                                                                                                                                                                                                                                                                                                                                              
        `,
        `
不知不觉间，小站已经苟活`,
        dnum,
        `天啦!`,
        `©2023 By uf4te`,
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#00CED1",
            "",
            "color:#00CED1",
            "color:#00CED1",
            "",
            "color:#00CED1",
            ""
        )
    );
}



function createtime2() {

    setTimeout(console.log.bind(console, "%c WELCOME %c 感谢各位王子公主的支持！爱你们哟 😘", "color:white; background-color:#23c682", "color:#00CED1"));

    setTimeout(console.log.bind(console, "%c W23-12 %c  坠入星野的月🌙 监测到你已经打开本站的控制台", "color:white; background-color:#4f90d9", "color:#00CED1"));

    setTimeout(
        console.log.bind(
            console,
            "%c S013-782 %c 警告：你正在访问 uf4te 的私人领域, 正在采取措施...",
            "color:white; background-color:#d9534f",
            "color:#00CED1"
        )
    );

    
    setTimeout(
        console.log.bind(console, "%c S013-782 %c 温馨提醒：你正处于 坠入星野的月🌙 控制台的监控中...", "color:white; background-color:#d9534f", "color:#00CED1")
    );

    setTimeout(
        console.log.bind(console, "%c ⚡ Powered by uf4te %c 请注意言行举止, 遵守江湖规矩, enjoy it!", "color:white; background-color:#f0ad4e", "color:#00CED1")
    );
}


createtime1();
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };

