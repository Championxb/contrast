import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import PaymentMethods from '../components/PaymentMethods.vue'
import TeamSettings from '../components/TeamSettings.vue'
import ComplianceDocuments from '../components/ComplianceDocuments.vue'
import InvoiceDetails from '../components/InvoiceDetails.vue'
import ContractorType from '../components/ContractorType.vue'
import Contracts from '../components/Contracts.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/payment-methods',
        name: 'PaymentMethods',
        component: PaymentMethods
    },
    {
        path: '/team-settings',
        name: 'TeamSettings',
        component: TeamSettings
    },
    {
        path: '/compliance-documents',
        name: 'ComplianceDocuments',
        component: ComplianceDocuments
    },
    {
        path: '/invoice-details/:id',
        name: 'InvoiceDetails',
        component: InvoiceDetails
    },
    {
        path: '/contractor-type',
        name: 'ContractorType',
        component: ContractorType
    },
    {
        path: '/contracts',
        name: 'Contracts',
        component: Contracts
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router