module.exports = {
	/**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
	apps: [

		// First application
		{
			name: 'SP',
			script: './build/main.js',
			exec_mode: 'cluster',
			instances: 'max',
			env: {
				PORT: 3000,
				NODE_CONFIG: 'dev',
				NODE_ENV: 'development'
			},
			env_test: {
				PORT: 3014,
				NODE_CONFIG: 'test',
				NODE_ENV: 'production'
			},
			env_pre: {
				PORT: 3014,
				NODE_CONFIG: 'pre',
				NODE_ENV: 'production'
			},
			env_prod: {
				PORT: 3000,
				NODE_CONFIG: 'prod',
				NODE_ENV: 'production'
			}
		}

	]

}
