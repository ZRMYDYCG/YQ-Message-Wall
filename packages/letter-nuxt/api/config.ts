/** 请求类型 */
export enum Method {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

/** 微服务请求参数 */
export enum SERVER_NAME {
  SYSTEM = 'system',
  AUTH = 'auth',
  SEARCH = 'search',
  FILE = 'file',
}

/** 私有图片下载预览 */
export function previewBaseUrl(url) {
  return `${import.meta.env.NUXT_PUBLIC_PREVIEW_BASEURL}/${SERVER_NAME.FILE}/imagePreview${url}`
}

// { "type": "feat", "section": "✨ Features | 新功能" },
// { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
// { "type": "chore", "section": "🎫 Chores | 其他更新" },
// { "type": "docs", "section": "📝 Documentation | 文档" },
// { "type": "style", "section": "💄 Styles | 风格" },
// { "type": "refactor", "section": "♻ Code Refactoring | 代码重构" },
// { "type": "perf", "section": "⚡ Performance Improvements | 性能优化" },
// { "type": "test", "section": "✅ Tests | 测试" },
// { "type": "revert", "section": "⏪ Reverts | 回退" },
// { "type": "build", "section": "👷‍ Build System | 构建" },
// { "type": "ci", "section": "🔧 Continuous Integration | CI 配置" },
// { "type": "config", "section": "🔨 CONFIG | 配置" }
