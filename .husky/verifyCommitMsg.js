const chalk = require('chalk');
const msgPaths = process.env.GIT_PARAMS;
let msg = require('fs')
    .readFileSync(msgPaths, 'utf-8')
    .trim();


//const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/;
const commitRE = /^(:\w{3,50}:.{3,30})/;
if (msg.includes('Merge branch')) {
    // 自动合并不加验证
} else {
    console.log(`提交信息是:${chalk.green(msg)}`);
    if (!commitRE.test(msg)) {
        console.log(msg);
        console.error(
            `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`提交信息不合法.`)}\n\n` +
            chalk.red(
                `  为了最终生成好的CHANGELOG，需要好好书写提交信息. 例如:\n\n`
            ) +
            `    ${chalk.green(`:类型表情:[类型] (范围) 提交主题`)}\n` +
            `    ${chalk.green(
                `:类型表情:[类型] (2-30个字母数字_-) (提交主题,提交内容一共5-200个中英文数字字母特殊符号)`
            )}\n` +
            `    ${chalk.green(`:sparkles:[feature] (all) 添加提交工具`)}\n\n` +
            chalk.red(`  See .github/COMMIT_CONVENTION.md for more details.\n`) +
            chalk.red(
                `  你可以运行 ${chalk.cyan(`npm run commit`)}按照提示生成提交信息.\n`
            )
        );
        process.exit(1);
    } else {
        console.log(
            `${chalk.green('恭喜你提交通过🍉。养成好的提交习惯，开启生活新高度')}`
        );
    }
}