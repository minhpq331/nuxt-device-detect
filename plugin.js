import parseUserAgent from '<%= options.parser %>'

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'

export default async function (ctx, inject) {
  let userAgent = ''
  if (typeof ctx.req !== 'undefined') {
    userAgent = ctx.req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent
  } else {
    <% if (options.defaultUserAgent) { %>
      userAgent = '<%= options.defaultUserAgent %>'
    <% } else { %>
      userAgent = DEFAULT_USER_AGENT
    <% } %>
  }
  // use default user-agent if user-agent header is not sent
  if (!userAgent) {
    userAgent = DEFAULT_USER_AGENT
  }
  const result = parseUserAgent(userAgent)
  ctx = Object.assign(ctx, result)
  inject('device', result)
}