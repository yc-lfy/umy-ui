// 表格的api
const apiComponent = [
    {
        path: 'u-table-api',
        component: () => import('../pages/u-table-component/apiPage/uTableApi.vue'),
        name: 'u-table',
    },
    {
        path: 'u-table-column-api',
        component: () => import('../pages/u-table-component/apiPage/uTableColumnApi.md'),
        name: 'u-table-column',
    },
    {
        path: 'paginationAndSideslipFrame',
        component: () => import('../pages/u-table-component/apiPage/paginationAndSideslipFrame.md'),
        name: '分页和侧滑弹窗',
    },
    {
        path: 'uxGridApi',
        component: () => import('../pages/u-table-component/apiPage/uxGridApi.vue'),
        name: 'uxGridApi',
    },
    {
        path: 'ux-table-column-api',
        component: () => import('../pages/u-table-component/apiPage/ux-table-column-api.vue'),
        name: 'ux-table-column-api',
    }
]
// 编辑表格
const editTypeTbalePage = [
    {
        path: 'basicEditTable',
        component: () => import('../pages/u-table-component/editTypeTbalePage/basicEditTable.md'),
        name: '基本的编辑',
    },
    {
        path: 'manualTrigger',
        component: () => import('../pages/u-table-component/editTypeTbalePage/manualTrigger.md'),
        name: '手动触发',
    },
    {
        path: 'InsertRow',
        component: () => import('../pages/u-table-component/editTypeTbalePage/InsertRow.md'),
        name: '插入行',
    },
    {
        path: 'showAll',
        component: () => import('../pages/u-table-component/editTypeTbalePage/showAll.md'),
        name: '全部显示',
    }
]
// 虚拟滚动表格
const virtualScrolling = [
    {
        path: 'virtualScrolling',
        component: () => import('../pages/u-table-component/virtualTableUsage/virtualScrolling.md'),
        name: '虚拟滚动',
    },
    {
        path: 'dataChangesTable',
        component: () => import('../pages/u-table-component/virtualTableUsage/dataChangesTable.md'),
        name: '数据变化',
    },
    {
        path: 'groupHeader',
        component: () => import('../pages/u-table-component/virtualTableUsage/groupHeader.md'),
        name: '分组表头',
    },
    {
        path: 'virtualCheckboxTable',
        component: () => import('../pages/u-table-component/virtualTableUsage/virtualCheckboxTable.md'),
        name: '虚拟滚动多选框',
    },
    {
        path: 'virtualTreeTable',
        component: () => import('../pages/u-table-component/virtualTableUsage/virtualTreeTable.md'),
        name: '虚拟树形表格',
    },
    {
        path: 'columnsAndRows',
        component: () => import('../pages/u-table-component/virtualTableUsage/columnsAndRows.md'),
        name: 'ux-grid虚拟'
    },
    {
        path: 'multistageHeadUx',
        component: () => import('../pages/u-table-component/virtualTableUsage/multistageHeadUx.md'),
        name: 'ux-grid多级头'
    },
    {
        path: 'expandRow',
        component: () => import('../pages/u-table-component/virtualTableUsage/expandRow.vue'),
        name: 'ux-grid展开行'
    },
    {
        path: 'selectionTree',
        component: () => import('../pages/u-table-component/virtualTableUsage/selectionTree.vue'),
        name: 'ux-grid树表格'
    },
    {
        path: 'reverseTable',
        component: () => import('../pages/u-table-component/virtualTableUsage/reverseTable.md'),
        name: 'ux-grid反转'
    },
    {
        path: 'ux-grid-screen',
        component: () => import('../pages/u-table-component/virtualTableUsage/ux-grid-screen.md'),
        name: 'ux-grid筛选'
    },
    {
        path: 'ux-grid-jsx',
        component: () => import('../pages/u-table-component/virtualTableUsage/ux-grid-jsx.vue'),
        name: 'ux-grid-jsx'
    },
    {
        path: 'multi-label-switching',
        component: () => import('../pages/u-table-component/virtualTableUsage/multi-label-switching.md'),
        name: 'multi-label-switching'
    },
    {
        path: 'keepAliveTable',
        component: () => import('../pages/u-table-component/virtualTableUsage/keepAliveTable.vue'),
        name: 'keepAliveTable',
        children: [
            {
                path: 'tab1',
                component: () => import('../pages/u-table-component/virtualTableUsage/tab1.vue'),
                name: 'tab1'
            },
            {
                path: 'tab2',
                component: () => import('../pages/u-table-component/virtualTableUsage/tab2.vue'),
                name: 'tab2'
            }
        ]
    },
    {
        path: 'dragCol',
        component: () => import('../pages/u-table-component/virtualTableUsage/dragCol'),
        name: 'dragCol'
    },
    {
        path: 'dragRow',
        component: () => import('../pages/u-table-component/virtualTableUsage/dragRow'),
        name: 'dragRow'
    }
]
// 基础表格
const basicTable = [
    {
        path: 'basicUsage',
        component: () => import('../pages/u-table-component/basicTableUsage/basicUsage.md'),
        name: '基础表格',
    },
    {
        path: 'gudinglie',
        component: () => import('../pages/u-table-component/basicTableUsage/gu-ding-lie.md'),
        name: '固定列表格',
    },
    {
        path: 'multiLevelMeter',
        component: () => import('../pages/u-table-component/basicTableUsage/multiLevelMeter.md'),
        name: '多级头表格',
    },
    {
        path: 'totalTable',
        component: () => import('../pages/u-table-component/basicTableUsage/totalTable.md'),
        name: '表尾合计行',
    },
    {
        path: 'treeTable',
        component: () => import('../pages/u-table-component/basicTableUsage/treeTable.md'),
        name: '树形数据与懒加载',
    },
    {
        path: 'checkboxTable',
        component: () => import('../pages/u-table-component/basicTableUsage/checkbox-table.md'),
        name: '多选表格',
    },
    {
        path: 'tableWithPagination',
        component: () => import('../pages/u-table-component/basicTableUsage/tableWithPagination.md'),
        name: '带分页的表格',
    },
    {
        path: 'filterFields',
        component: () => import('../pages/u-table-component/basicTableUsage/filterFields.md'),
        name: '筛选字段侧滑弹窗',
    },
    {
        path: 'beautifyTable',
        component: () => import('../pages/u-table-component/basicTableUsage/beautifyTable.md'),
        name: '美化表格',
    },
    {
        path: 'rxpandRow',
        component: () => import('../pages/u-table-component/basicTableUsage/rxpandRow.md'),
        name: '展开行',
    },
    {
        path: 'mergeRowsOrColumns',
        component: () => import('../pages/u-table-component/basicTableUsage/mergeRowsOrColumns.md'),
        name: '合并行或列',
    },
    {
        path: 'screenTable',
        component: () => import('../pages/u-table-component/basicTableUsage/screenTable.md'),
        name: '筛选表格',
    }
]

export default  [
    ...basicTable,
    ...virtualScrolling,
    ...editTypeTbalePage,
    ...apiComponent
]
