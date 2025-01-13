import { exec } from "child_process";
import { promisify } from "util";

// 使用 promisify 使 exec 支援 async/await
const execAsync = promisify(exec);

function createUniqueSSID() {
    const t = new Date();
    const mill = t.getMilliseconds();
    return ((t.getHours() * 3600 + t.getMinutes() * 60 + t.getSeconds()) * 100 + mill).toString(36);
}

/**
 * 下載影片
 * @param url 要下載的影片網址
 * @param outputPath 輸出的檔案路徑
 */
const downloadVideo = async (url: string, outputPath: string) => {
  try {
    // 檢查是否有提供 yt-dlp 指令
    const { stdout } = await execAsync("yt-dlp --version");
    console.log(`yt-dlp version: ${stdout.trim()}`);

    // 組合下載指令
    const command = `yt-dlp -o "${outputPath}" ${url}`;
    console.log(`執行指令: ${command}`);

    // 執行下載
    const { stdout: downloadOutput } = await execAsync(command);
    console.log(`下載成功: \n${downloadOutput}`);
  } catch (error: any) {
    console.error("下載失敗:", error.message || error);
  }
};

// 測試用的影片網址與輸出路徑`
const videoUrl = "https://www.youtube.com/watch?v=cdbwwp3ITQE"; // 替換為目標影片網址
const outputPath = `./video_dl/${createUniqueSSID()}.mov`; // 輸出檔案路徑

downloadVideo(videoUrl, outputPath).catch(console.error);
