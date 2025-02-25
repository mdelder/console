/* Copyright Contributors to the Open Cluster Management project */
/* istanbul ignore file */

export enum NavigationPath {
    console = '/multicloud',
    clusters = '/multicloud/clusters',
    clusterDetails = '/multicloud/clusters/:id',
    clusterOverview = '/multicloud/clusters/:id/overview',
    clusterNodes = '/multicloud/clusters/:id/nodes',
    clusterSettings = '/multicloud/clusters/:id/settings',
    discoveredClusters = '/multicloud/discovered-clusters',
    createCluster = '/multicloud/create-cluster',
    importCluster = '/multicloud/import-cluster',
    importCommand = '/multicloud/import-cluster/:clusterName',
    credentials = '/multicloud/credentials',
    addCredentials = '/multicloud/add-credentials',
    editCredentials = '/multicloud/credentials/:namespace/:name',
    bareMetalAssets = '/multicloud/bare-metal-assets',
    editBareMetalAsset = '/multicloud/bare-metal-assets/:namespace/:name',
    createBareMetalAsset = '/multicloud/create-bare-metal-asset',
    discoveryConfig = '/multicloud/discovery/config',
}
