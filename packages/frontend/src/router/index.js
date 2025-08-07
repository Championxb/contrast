import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import PaymentMethods from '../components/PaymentMethods.vue'
import TeamSettings from '../components/TeamSettings.vue'
import ComplianceDocuments from '../components/ComplianceDocuments.vue'
import InvoiceDetails from '../components/InvoiceDetails.vue'
import ContractorType from '../components/ContractorType.vue'
import Contracts from '../components/Contracts.vue'
import InvoiceReceipts from '../components/InvoiceReceipts.vue'
import AppsPerks from '../components/AppsPerks.vue'
import TaxForms from '../components/TaxForms.vue'
import OrganizationSettings from '../components/OrganizationSettings.vue'

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
    },
    {
        path: '/invoice-receipts',
        name: 'InvoiceReceipts',
        component: InvoiceReceipts
    },
    {
        path: '/apps-perks',
        name: 'AppsPerks',
        component: AppsPerks
    },
    {
        path: '/tax-forms',
        name: 'TaxForms',
        component: TaxForms
    },
    {
        path: '/organization-settings',
        name: 'OrganizationSettings',
        component: OrganizationSettings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router