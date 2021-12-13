export const areEnvVarsSet = () =>
  ['KEY_PAIR_PATH', 'SOLANA_CLUSTER_URL', 'DESTINATION_ADDRESS'].every((key) => Object.keys(process.env).includes(key));
