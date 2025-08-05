'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Solarium CP App Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppStateManager.html" data-type="entity-link" >AppStateManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/AutoLoadService.html" data-type="entity-link" >AutoLoadService</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadgeService.html" data-type="entity-link" >BadgeService</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDao.html" data-type="entity-link" >BaseDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommissionDao.html" data-type="entity-link" >CommissionDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerDao.html" data-type="entity-link" >CustomerDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardSync.html" data-type="entity-link" >DashboardSync</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentDao.html" data-type="entity-link" >DocumentDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentSyncService.html" data-type="entity-link" >DocumentSyncService</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentUploadErrorBoundary.html" data-type="entity-link" >DocumentUploadErrorBoundary</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentUploadService.html" data-type="entity-link" >DocumentUploadService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorBoundary.html" data-type="entity-link" >ErrorBoundary</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageCompressor.html" data-type="entity-link" >ImageCompressor</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeadDao.html" data-type="entity-link" >LeadDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockPerformanceObserver.html" data-type="entity-link" >MockPerformanceObserver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformanceMonitor.html" data-type="entity-link" >PerformanceMonitor</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformanceObserverService.html" data-type="entity-link" >PerformanceObserverService</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuotationDao.html" data-type="entity-link" >QuotationDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncDao.html" data-type="entity-link" >SyncDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncManager.html" data-type="entity-link" >SyncManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncManager-1.html" data-type="entity-link" >SyncManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncMutex.html" data-type="entity-link" >SyncMutex</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncScheduler.html" data-type="entity-link" >SyncScheduler</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncService.html" data-type="entity-link" >SyncService</a>
                            </li>
                            <li class="link">
                                <a href="classes/SystemCleanup.html" data-type="entity-link" >SystemCleanup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TabErrorBoundary.html" data-type="entity-link" >TabErrorBoundary</a>
                            </li>
                            <li class="link">
                                <a href="classes/TelemetryConfiguration.html" data-type="entity-link" >TelemetryConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/TelemetryService.html" data-type="entity-link" >TelemetryService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AcceptRejectQuotationRequest.html" data-type="entity-link" >AcceptRejectQuotationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AcceptRejectQuotationResponse.html" data-type="entity-link" >AcceptRejectQuotationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiDocument.html" data-type="entity-link" >ApiDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiDocument-1.html" data-type="entity-link" >ApiDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiEnvelope.html" data-type="entity-link" >ApiEnvelope</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiKycDocument.html" data-type="entity-link" >ApiKycDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiLead.html" data-type="entity-link" >ApiLead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiLead-1.html" data-type="entity-link" >ApiLead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiLeadResponse.html" data-type="entity-link" >ApiLeadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppButtonProps.html" data-type="entity-link" >AppButtonProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppStartMetric.html" data-type="entity-link" >AppStartMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppTextInputProps.html" data-type="entity-link" >AppTextInputProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthGuardProps.html" data-type="entity-link" >AuthGuardProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link" >AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AutoLoadConfig.html" data-type="entity-link" >AutoLoadConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseMetric.html" data-type="entity-link" >BaseMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BOMItemMaster.html" data-type="entity-link" >BOMItemMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BOMSelection.html" data-type="entity-link" >BOMSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BudgetViolation.html" data-type="entity-link" >BudgetViolation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CentralSubsidyRules.html" data-type="entity-link" >CentralSubsidyRules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CleanupReport.html" data-type="entity-link" >CleanupReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColdStartMetric.html" data-type="entity-link" >ColdStartMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Commission.html" data-type="entity-link" >Commission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionDetail.html" data-type="entity-link" >CommissionDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionDetailResponse.html" data-type="entity-link" >CommissionDetailResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionFilterChipsProps.html" data-type="entity-link" >CommissionFilterChipsProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionFilters.html" data-type="entity-link" >CommissionFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionFilters-1.html" data-type="entity-link" >CommissionFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionFilterSheetProps.html" data-type="entity-link" >CommissionFilterSheetProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionKPIBarProps.html" data-type="entity-link" >CommissionKPIBarProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionKPIStats.html" data-type="entity-link" >CommissionKPIStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionListItem.html" data-type="entity-link" >CommissionListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionListItemProps.html" data-type="entity-link" >CommissionListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionSearchBarProps.html" data-type="entity-link" >CommissionSearchBarProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionsResponse.html" data-type="entity-link" >CommissionsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommissionState.html" data-type="entity-link" >CommissionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressedImage.html" data-type="entity-link" >CompressedImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressedImage-1.html" data-type="entity-link" >CompressedImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressionMetrics.html" data-type="entity-link" >CompressionMetrics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressionOptions.html" data-type="entity-link" >CompressionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressionOptions-1.html" data-type="entity-link" >CompressionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConnectivityContextValue.html" data-type="entity-link" >ConnectivityContextValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConnectivityProviderProps.html" data-type="entity-link" >ConnectivityProviderProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateCommissionRequest.html" data-type="entity-link" >CreateCommissionRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateCustomerRequest.html" data-type="entity-link" >CreateCustomerRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateDocumentRequest.html" data-type="entity-link" >CreateDocumentRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateKycDocumentRequest.html" data-type="entity-link" >CreateKycDocumentRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateLeadRequest.html" data-type="entity-link" >CreateLeadRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateLeadRequest-1.html" data-type="entity-link" >CreateLeadRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateLeadResponse.html" data-type="entity-link" >CreateLeadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateQuotationApiRequest.html" data-type="entity-link" >CreateQuotationApiRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateQuotationApiResponse.html" data-type="entity-link" >CreateQuotationApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateQuotationRequest.html" data-type="entity-link" >CreateQuotationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateQuotationRequest-1.html" data-type="entity-link" >CreateQuotationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateQuotationResponse.html" data-type="entity-link" >CreateQuotationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerDetail.html" data-type="entity-link" >CustomerDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerDetailResponse.html" data-type="entity-link" >CustomerDetailResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerDocumentsResponse.html" data-type="entity-link" >CustomerDocumentsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerFilters.html" data-type="entity-link" >CustomerFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerFilterSheetProps.html" data-type="entity-link" >CustomerFilterSheetProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerKYCTabProps.html" data-type="entity-link" >CustomerKYCTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerLeadsTabProps.html" data-type="entity-link" >CustomerLeadsTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerListItem.html" data-type="entity-link" >CustomerListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerListItemProps.html" data-type="entity-link" >CustomerListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerProfileTabProps.html" data-type="entity-link" >CustomerProfileTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerSearchBarProps.html" data-type="entity-link" >CustomerSearchBarProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomersResponse.html" data-type="entity-link" >CustomersResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerState.html" data-type="entity-link" >CustomerState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardErrorResponse.html" data-type="entity-link" >DashboardErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardStatCardProps.html" data-type="entity-link" >DashboardStatCardProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardSummary.html" data-type="entity-link" >DashboardSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardSummary-1.html" data-type="entity-link" >DashboardSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardSummaryRequest.html" data-type="entity-link" >DashboardSummaryRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardSummaryResponse.html" data-type="entity-link" >DashboardSummaryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseContextType.html" data-type="entity-link" >DatabaseContextType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseServices.html" data-type="entity-link" >DatabaseServices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DisabledTabToastConfig.html" data-type="entity-link" >DisabledTabToastConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DiscomMaster.html" data-type="entity-link" >DiscomMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Document.html" data-type="entity-link" >Document</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentAsset.html" data-type="entity-link" >DocumentAsset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentCountResponse.html" data-type="entity-link" >DocumentCountResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentCountState.html" data-type="entity-link" >DocumentCountState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentGridProps.html" data-type="entity-link" >DocumentGridProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentInput.html" data-type="entity-link" >DocumentInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentListResponse.html" data-type="entity-link" >DocumentListResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentMetadata.html" data-type="entity-link" >DocumentMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentSyncResult.html" data-type="entity-link" >DocumentSyncResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentThumbnailProps.html" data-type="entity-link" >DocumentThumbnailProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentUploadHook.html" data-type="entity-link" >DocumentUploadHook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentUploadScreenProps.html" data-type="entity-link" >DocumentUploadScreenProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentUploadState.html" data-type="entity-link" >DocumentUploadState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentUploadState-1.html" data-type="entity-link" >DocumentUploadState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentValidationResult.html" data-type="entity-link" >DocumentValidationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentValidationResult-1.html" data-type="entity-link" >DocumentValidationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentViewSasRequest.html" data-type="entity-link" >DocumentViewSasRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailQuotationRequest.html" data-type="entity-link" >EmailQuotationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailQuotationResponse.html" data-type="entity-link" >EmailQuotationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmptyCommissionsStateProps.html" data-type="entity-link" >EmptyCommissionsStateProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmptyCustomersStateProps.html" data-type="entity-link" >EmptyCustomersStateProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmptyLeadsStateProps.html" data-type="entity-link" >EmptyLeadsStateProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorBannerProps.html" data-type="entity-link" >ErrorBannerProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorBoundaryProps.html" data-type="entity-link" >ErrorBoundaryProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorBoundaryState.html" data-type="entity-link" >ErrorBoundaryState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorProps.html" data-type="entity-link" >ErrorProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorTestComponentProps.html" data-type="entity-link" >ErrorTestComponentProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExistingDocumentAsset.html" data-type="entity-link" >ExistingDocumentAsset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedQuotationQueryParams.html" data-type="entity-link" >ExtendedQuotationQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeesBreakdown.html" data-type="entity-link" >FeesBreakdown</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeesMaster.html" data-type="entity-link" >FeesMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSheetProps.html" data-type="entity-link" >FilterSheetProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FloatingActionButtonProps.html" data-type="entity-link" >FloatingActionButtonProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCommissionByIdParams.html" data-type="entity-link" >GetCommissionByIdParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCommissionsParams.html" data-type="entity-link" >GetCommissionsParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCustomersParams.html" data-type="entity-link" >GetCustomersParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetLeadsParams.html" data-type="entity-link" >GetLeadsParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetLeadsParams-1.html" data-type="entity-link" >GetLeadsParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridItem.html" data-type="entity-link" >GridItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HydrationData.html" data-type="entity-link" >HydrationData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncrementDocumentCountPayload.html" data-type="entity-link" >IncrementDocumentCountPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InverterMaster.html" data-type="entity-link" >InverterMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InverterRequestItem.html" data-type="entity-link" >InverterRequestItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InverterSelection.html" data-type="entity-link" >InverterSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycDocument.html" data-type="entity-link" >KycDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycDocument-1.html" data-type="entity-link" >KycDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycSasTokenRequest.html" data-type="entity-link" >KycSasTokenRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycStatus.html" data-type="entity-link" >KycStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LastSyncIndicatorProps.html" data-type="entity-link" >LastSyncIndicatorProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lead.html" data-type="entity-link" >Lead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lead-1.html" data-type="entity-link" >Lead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lead-2.html" data-type="entity-link" >Lead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lead-3.html" data-type="entity-link" >Lead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadDocSasTokenRequest.html" data-type="entity-link" >LeadDocSasTokenRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadInfoTabProps.html" data-type="entity-link" >LeadInfoTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadListItemProps.html" data-type="entity-link" >LeadListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadQueryParams.html" data-type="entity-link" >LeadQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadsApiResponse.html" data-type="entity-link" >LeadsApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadsApiResponse-1.html" data-type="entity-link" >LeadsApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadsData.html" data-type="entity-link" >LeadsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadState.html" data-type="entity-link" >LeadState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadSummaryResponse.html" data-type="entity-link" >LeadSummaryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadTab.html" data-type="entity-link" >LeadTab</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadTabPlaceholderProps.html" data-type="entity-link" >LeadTabPlaceholderProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogContext.html" data-type="entity-link" >LogContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Logger.html" data-type="entity-link" >Logger</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MasterData.html" data-type="entity-link" >MasterData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MasterDataQueryParams.html" data-type="entity-link" >MasterDataQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MasterDataResponse.html" data-type="entity-link" >MasterDataResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MemoryMetric.html" data-type="entity-link" >MemoryMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MemoryMetric-1.html" data-type="entity-link" >MemoryMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MemorySnapshot.html" data-type="entity-link" >MemorySnapshot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MigrationStep.html" data-type="entity-link" >MigrationStep</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MockLead.html" data-type="entity-link" >MockLead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationMetric.html" data-type="entity-link" >NavigationMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationWrapperProps.html" data-type="entity-link" >NavigationWrapperProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NetworkMetric.html" data-type="entity-link" >NetworkMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NetworkState.html" data-type="entity-link" >NetworkState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NetworkState-1.html" data-type="entity-link" >NetworkState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NetworkState-2.html" data-type="entity-link" >NetworkState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewLeadFormData.html" data-type="entity-link" >NewLeadFormData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationItem.html" data-type="entity-link" >NotificationItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationsResponse.html" data-type="entity-link" >NotificationsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedLeadsResponse.html" data-type="entity-link" >PaginatedLeadsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedResponse.html" data-type="entity-link" >PaginatedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelMaster.html" data-type="entity-link" >PanelMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelRequestItem.html" data-type="entity-link" >PanelRequestItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelSelection.html" data-type="entity-link" >PanelSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceBudget.html" data-type="entity-link" >PerformanceBudget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceMark.html" data-type="entity-link" >PerformanceMark</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceMetric.html" data-type="entity-link" >PerformanceMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceMetric-1.html" data-type="entity-link" >PerformanceMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceMetric-2.html" data-type="entity-link" >PerformanceMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceNavigationWrapperProps.html" data-type="entity-link" >PerformanceNavigationWrapperProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceObserverConfig.html" data-type="entity-link" >PerformanceObserverConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformanceReport.html" data-type="entity-link" >PerformanceReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PermissionDeniedMessageProps.html" data-type="entity-link" >PermissionDeniedMessageProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PermissionStatus.html" data-type="entity-link" >PermissionStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersistGateProviderProps.html" data-type="entity-link" >PersistGateProviderProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersistPayload.html" data-type="entity-link" >PersistPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersistResult.html" data-type="entity-link" >PersistResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PickerOptions.html" data-type="entity-link" >PickerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PreferencesState.html" data-type="entity-link" >PreferencesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressProps.html" data-type="entity-link" >ProgressProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Props.html" data-type="entity-link" >Props</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Props-1.html" data-type="entity-link" >Props</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PullToRefreshControlProps.html" data-type="entity-link" >PullToRefreshControlProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Quotation.html" data-type="entity-link" >Quotation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Quotation-1.html" data-type="entity-link" >Quotation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationActionApiResponse.html" data-type="entity-link" >QuotationActionApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationComponents.html" data-type="entity-link" >QuotationComponents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationComponentsApi.html" data-type="entity-link" >QuotationComponentsApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationDetail.html" data-type="entity-link" >QuotationDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationDetailApi.html" data-type="entity-link" >QuotationDetailApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationDetailApiResponse.html" data-type="entity-link" >QuotationDetailApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationDetailResponse.html" data-type="entity-link" >QuotationDetailResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationEmptyStateProps.html" data-type="entity-link" >QuotationEmptyStateProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationFilters.html" data-type="entity-link" >QuotationFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationFilterSheetProps.html" data-type="entity-link" >QuotationFilterSheetProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationListConfig.html" data-type="entity-link" >QuotationListConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationListItemProps.html" data-type="entity-link" >QuotationListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationPdfResponse.html" data-type="entity-link" >QuotationPdfResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationPricing.html" data-type="entity-link" >QuotationPricing</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationPricingApi.html" data-type="entity-link" >QuotationPricingApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationQueryParams.html" data-type="entity-link" >QuotationQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationResponse.html" data-type="entity-link" >QuotationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationSearchBarProps.html" data-type="entity-link" >QuotationSearchBarProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationState.html" data-type="entity-link" >QuotationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationWizardData.html" data-type="entity-link" >QuotationWizardData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationWizardErrors.html" data-type="entity-link" >QuotationWizardErrors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationWizardState.html" data-type="entity-link" >QuotationWizardState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RehydrationMetrics.html" data-type="entity-link" >RehydrationMetrics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RetryState.html" data-type="entity-link" >RetryState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SasTokenResponse.html" data-type="entity-link" >SasTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScreenContainerProps.html" data-type="entity-link" >ScreenContainerProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScreenRenderMetric.html" data-type="entity-link" >ScreenRenderMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchBarProps.html" data-type="entity-link" >SearchBarProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Service.html" data-type="entity-link" >Service</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServicesResponse.html" data-type="entity-link" >ServicesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetDocumentCountPayload.html" data-type="entity-link" >SetDocumentCountPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetErrorPayload.html" data-type="entity-link" >SetErrorPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetLoadingPayload.html" data-type="entity-link" >SetLoadingPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetOperationPayload.html" data-type="entity-link" >SetOperationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShareQuotationRequest.html" data-type="entity-link" >ShareQuotationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShareQuotationResponse.html" data-type="entity-link" >ShareQuotationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StaleDataBannerProps.html" data-type="entity-link" >StaleDataBannerProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-1.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateMaster.html" data-type="entity-link" >StateMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateSubsidyRules.html" data-type="entity-link" >StateSubsidyRules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusChangeDialogProps.html" data-type="entity-link" >StatusChangeDialogProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusChangeDialogRef.html" data-type="entity-link" >StatusChangeDialogRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusChangeDraft.html" data-type="entity-link" >StatusChangeDraft</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusChangeFormData.html" data-type="entity-link" >StatusChangeFormData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusValidationError.html" data-type="entity-link" >StatusValidationError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoredToken.html" data-type="entity-link" >StoredToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StructureSelection.html" data-type="entity-link" >StructureSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubsidyRulesMaster.html" data-type="entity-link" >SubsidyRulesMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncConfig.html" data-type="entity-link" >SyncConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncEntity.html" data-type="entity-link" >SyncEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncEventData.html" data-type="entity-link" >SyncEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncMetadata.html" data-type="entity-link" >SyncMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncPerformanceData.html" data-type="entity-link" >SyncPerformanceData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncProgress.html" data-type="entity-link" >SyncProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncResult.html" data-type="entity-link" >SyncResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SyncResult-1.html" data-type="entity-link" >SyncResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TabIconProps.html" data-type="entity-link" >TabIconProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryBatch.html" data-type="entity-link" >TelemetryBatch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryConfig.html" data-type="entity-link" >TelemetryConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryError.html" data-type="entity-link" >TelemetryError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryEvent.html" data-type="entity-link" >TelemetryEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetrySettings.html" data-type="entity-link" >TelemetrySettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemeProviderProps.html" data-type="entity-link" >ThemeProviderProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToastOptions.html" data-type="entity-link" >ToastOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TooltipProps.html" data-type="entity-link" >TooltipProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopBarProps.html" data-type="entity-link" >TopBarProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateCommissionRequest.html" data-type="entity-link" >UpdateCommissionRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateCustomerRequest.html" data-type="entity-link" >UpdateCustomerRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateDocumentRequest.html" data-type="entity-link" >UpdateDocumentRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateLeadRequest.html" data-type="entity-link" >UpdateLeadRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateLeadStatusRequest.html" data-type="entity-link" >UpdateLeadStatusRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateLeadStatusResponse.html" data-type="entity-link" >UpdateLeadStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateQuotationRequest.html" data-type="entity-link" >UpdateQuotationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateSyncMetadataRequest.html" data-type="entity-link" >UpdateSyncMetadataRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadOptions.html" data-type="entity-link" >UploadOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadProgress.html" data-type="entity-link" >UploadProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadResult.html" data-type="entity-link" >UploadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadState.html" data-type="entity-link" >UploadState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpsertLeadsPayload.html" data-type="entity-link" >UpsertLeadsPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpsertQuotationsPayload.html" data-type="entity-link" >UpsertQuotationsPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseCreateQuotationResult.html" data-type="entity-link" >UseCreateQuotationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseDashboardRefreshReturn.html" data-type="entity-link" >UseDashboardRefreshReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseDocumentCountOptions.html" data-type="entity-link" >UseDocumentCountOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseDocumentCountReturn.html" data-type="entity-link" >UseDocumentCountReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseDocumentPickerReturn.html" data-type="entity-link" >UseDocumentPickerReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseLeadByIdOptions.html" data-type="entity-link" >UseLeadByIdOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseLeadByIdResult.html" data-type="entity-link" >UseLeadByIdResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseLeadsRefreshOptions.html" data-type="entity-link" >UseLeadsRefreshOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseLeadsRefreshResult.html" data-type="entity-link" >UseLeadsRefreshResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseMasterDataResult.html" data-type="entity-link" >UseMasterDataResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePaginatedCommissionsOptions.html" data-type="entity-link" >UsePaginatedCommissionsOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePaginatedCommissionsResult.html" data-type="entity-link" >UsePaginatedCommissionsResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePaginatedCustomersOptions.html" data-type="entity-link" >UsePaginatedCustomersOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePaginatedCustomersResult.html" data-type="entity-link" >UsePaginatedCustomersResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePaginatedLeadsOptions.html" data-type="entity-link" >UsePaginatedLeadsOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePaginatedLeadsResult.html" data-type="entity-link" >UsePaginatedLeadsResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePerformanceMarkOptions.html" data-type="entity-link" >UsePerformanceMarkOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsePullToRefreshReturn.html" data-type="entity-link" >UsePullToRefreshReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseQuotationActionsResult.html" data-type="entity-link" >UseQuotationActionsResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseQuotationDetailResult.html" data-type="entity-link" >UseQuotationDetailResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseQuotationsByLeadResult.html" data-type="entity-link" >UseQuotationsByLeadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseQuotationsResult.html" data-type="entity-link" >UseQuotationsResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseQuotationWizardResult.html" data-type="entity-link" >UseQuotationWizardResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInteractionMetric.html" data-type="entity-link" >UserInteractionMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationError.html" data-type="entity-link" >ValidationError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationResult.html" data-type="entity-link" >ValidationResult</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});