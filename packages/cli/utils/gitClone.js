 // 拉取远程仓库
import download from 'download-git-repo'
// 颜色插件 chalk
import chalk from 'chalk'
// loading 插件 ora
import ora from 'ora'

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start()
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail()
        console.log('err', chalk.red(err))
        reject(err)
        return
      }
      downSpinner.succeed(chalk.green('模板下载成功！'))
      resolve()
    })
  })
}
