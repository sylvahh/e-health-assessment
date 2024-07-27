type Environment = 'development' | 'production'

const AppEnvironment: Environment = 'production'

export const devMode = AppEnvironment !== 'production'
