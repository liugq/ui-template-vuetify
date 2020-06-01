// 引入mockjs
// const Mock = require('mockjs')
import Mock from 'mockjs'
// 获取 mock.Random 对象
// const Random = Mock.Random
console.log('loaded mockjs-------------------------------')
// Mock.setup({ timeout: 400 }) // 响应时间延迟 400 毫秒；
Mock.mock('/login', {
  isSuccess: true,
  targetUrl: '/'
})

Mock.mock('/login/account', 'get', {
  accountId: 10000,
  description: '管理员',
  employeeId: 0,
  loginName: 'admin',
  status: 1,
  currentRoleId: 10001,
  currentOrgId: 0,
  currentRole: {
    roleId: 10001,
    dateFrom: '2017-08-23 00:11:25',
    dateTo: '5000-01-01 00:00:00',
    roleDesc: '系统管理员',
    roleName: '系统管理员',
    roleType: 0,
    status: 1
  },
  accountRoleAssigns: [
    {
      id: {
        roleId: 10001,
        accountId: 10000
      },
      dateFrom: '2017-08-22 00:00:00',
      dateTo: '5000-01-01 00:00:00',
      isDefaultRole: 1,
      orgId: 0,
      fndPrvLoginAccount: {
        accountId: 10000,
        description: '管理员',
        employeeId: 0,
        loginName: 'admin',
        status: 1
      },
      fndPrvRole: {
        roleId: 10001,
        dateFrom: '2017-08-23 00:11:25',
        dateTo: '5000-01-01 00:00:00',
        roleDesc: '系统管理员描述',
        roleName: '系统管理员',
        roleType: 0,
        status: 1,
        dateStatus: 1
      }
    },
    {
      id: {
        roleId: 10002,
        accountId: 10000
      },
      dateFrom: '2017-08-22 00:00:00',
      dateTo: '5000-01-01 00:00:00',
      isDefaultRole: -1,
      orgId: 1,
      fndPrvLoginAccount: {
        accountId: 10000,
        description: '管理员',
        employeeId: 0,
        loginName: 'admin',
        status: 1
      },
      fndPrvRole: {
        roleId: 10002,
        dateFrom: '2017-08-23 00:11:25',
        dateTo: '5000-01-01 00:00:00',
        roleDesc: '系统管理员2描述',
        roleName: '系统管理员2',
        roleType: 0,
        status: 1,
        dateStatus: 1
      }
    }
  ],
  enabled: true,
  authorities: [
    {
      authority: 'LOOKUP-MAINTAIN'
    },
    {
      authority: 'FUNCTION-MAINTAIN'
    }
  ],
  username: 'Admin',
  accountNonExpired: true,
  credentialsNonExpired: true,
  accountNonLocked: true
})

Mock.mock('/login/account/10/1', {
  content: [
    {
      accountId: 10009,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      description: '普通用户,部分功能设置',
      employeeId: 0,
      loginName: 'liugq15',
      status: 1
    },
    {
      accountId: 10008,
      accountName: '郭丽君',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      description: '普通用户,部分功能设置',
      employeeId: 0,
      loginName: 'liugq13',
      status: 1
    },
    {
      accountId: 10007,
      accountName: '刘欣懿',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      description: '普通用户,部分功能设置',
      employeeId: 0,
      loginName: 'liugq12',
      status: 1
    },
    {
      accountId: 10006,
      accountName: '马云',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      description: '普通用户,部分功能设置',
      employeeId: 0,
      loginName: 'liugq11',
      status: 1
    },
    {
      accountId: 10005,
      accountName: '马化腾',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      description: 'liugq10',
      employeeId: 0,
      loginName: 'liugq10',
      status: 1
    },
    {
      accountId: 10004,
      accountName: '雷军',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      description: 'liugq09',
      employeeId: 0,
      loginName: 'liugq09',
      status: 1
    },
    {
      accountId: 10003,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      description: 'liugq008',
      employeeId: 0,
      loginName: 'liugq008',
      status: -1
    },
    {
      accountId: 10002,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      description: 'liugq007',
      employeeId: 1818,
      loginName: 'liugq007',
      status: -1
    },
    {
      accountId: 10001,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      description: '查询用户',
      employeeId: 0,
      loginName: 'liugq',
      status: 1
    },
    {
      accountId: 10000,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      description: '管理员，系统管理用户,系统设置',
      employeeId: 0,
      loginName: 'admin8',
      status: 1
    }
  ],
  last: false,
  totalPages: 2,
  totalElements: 14,
  number: 0,
  size: 10,
  sort: [
    {
      direction: 'DESC',
      property: 'accountId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: false,
      descending: true
    }
  ],
  first: true,
  numberOfElements: 10
})
Mock.mock('/login/account/10/2', {
  content: [
    {
      accountId: 4,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      description: '管理员，系统管理用户,系统设置',
      employeeId: 0,
      loginName: 'admin',
      status: 1
    },
    {
      accountId: 3,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      description: '管理员，系统管理用户',
      employeeId: 0,
      loginName: 'admin3',
      status: 1
    },
    {
      accountId: 2,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      description: '管理员，系统管理用户',
      employeeId: 0,
      loginName: 'admin2',
      status: 1
    },
    {
      accountId: 1,
      accountName: '刘国强',
      accountAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      description: '管理员，系统管理用户',
      employeeId: 0,
      loginName: 'admin0',
      status: 1
    }
  ],
  last: true,
  totalPages: 2,
  totalElements: 14,
  number: 1,
  size: 10,
  sort: [
    {
      direction: 'DESC',
      property: 'accountId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: false,
      descending: true
    }
  ],
  first: false,
  numberOfElements: 4
})

Mock.mock('/login/account', 'post', {
  isSuccess: 'ok'
})
Mock.mock('/login/account', 'put', 1)
Mock.mock('/login/account-pwd', 'put', 1)
Mock.mock('/login/account/1', 'delete', 1)
Mock.mock('/login/account/2', 'delete', 2)
Mock.mock('/logout', {})

Mock.mock('/lookup/lookuptype/10/1', 'get', {
  content: [
    {
      lookupTypeId: 10000,
      description: '性别',
      lookupTypeName: '性别',
      status: 1
    },
    {
      lookupTypeId: 10001,
      description: '是否有效状态',
      lookupTypeName: '状态',
      status: 1
    },
    {
      lookupTypeId: 10002,
      description: '系统模块',
      lookupTypeName: '系统模块',
      status: 1
    },
    {
      lookupTypeId: 10003,
      description: '请求方法，Http请求方法',
      lookupTypeName: '请求方法',
      status: 1
    },
    {
      lookupTypeId: 10004,
      description: '经销商类型',
      lookupTypeName: '经销商类型',
      status: 1
    },
    {
      lookupTypeId: 10005,
      description: '人员类型',
      lookupTypeName: '人员类型',
      status: 1
    },
    {
      lookupTypeId: 10006,
      description: '操作系统类型',
      lookupTypeName: '操作系统类型',
      status: 1
    },
    {
      lookupTypeId: 10007,
      description: '区域类型',
      lookupTypeName: '区域类型',
      status: 1
    },
    {
      lookupTypeId: 10008,
      description: '员工级别',
      lookupTypeName: '员工级别',
      status: 1
    },
    {
      lookupTypeId: 10009,
      description: '资产类型',
      lookupTypeName: '资产类型',
      status: 1
    }
  ],
  last: false,
  totalElements: 13,
  totalPages: 2,
  number: 0,
  size: 10,
  sort: [
    {
      direction: 'ASC',
      property: 'lookupTypeId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: true,
      descending: false
    }
  ],
  first: true,
  numberOfElements: 10
})

Mock.mock('/lookup/lookuptype/10/2', 'get', {
  content: [
    {
      lookupTypeId: 10010,
      description: '资产属性',
      lookupTypeName: '资产属性',
      status: 1
    },
    {
      lookupTypeId: 10011,
      description: '合同类别',
      lookupTypeName: '合同类别',
      status: 1
    },
    {
      lookupTypeId: 10012,
      description: '采购类别',
      lookupTypeName: '采购类别',
      status: 1
    }
  ],
  last: true,
  totalElements: 13,
  totalPages: 2,
  number: 1,
  size: 10,
  sort: [
    {
      direction: 'ASC',
      property: 'lookupTypeId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: true,
      descending: false
    }
  ],
  first: false,
  numberOfElements: 3
})

Mock.mock('/lookup/lookuptype', 'post', 1)
Mock.mock('/lookup/lookuptype', 'put', 2)
Mock.mock('/lookup/lookupvalue/10/1', 'get', {
  content: [
    {
      lookupId: 10000,
      description: '男',
      lookupCode: '1',
      lookupName: '男',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10000,
        description: '性别',
        lookupTypeName: '性别',
        status: 1
      }
    },
    {
      lookupId: 10001,
      description: '女',
      lookupCode: '0',
      lookupName: '女',
      orderNumber: 1,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10000,
        description: '性别',
        lookupTypeName: '性别',
        status: 1
      }
    },
    {
      lookupId: 10002,
      description: '有效',
      lookupCode: '1',
      lookupName: '有效',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10001,
        description: '是否有效状态',
        lookupTypeName: '状态',
        status: 1
      }
    },
    {
      lookupId: 10003,
      description: '无效',
      lookupCode: '-1',
      lookupName: '无效',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10001,
        description: '是否有效状态',
        lookupTypeName: '状态',
        status: 1
      }
    },
    {
      lookupId: 10004,
      description: '系统设置',
      lookupCode: '110',
      lookupName: '系统设置',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10002,
        description: '系统模块',
        lookupTypeName: '系统模块',
        status: 1
      }
    },
    {
      lookupId: 10005,
      description: '权限管理',
      lookupCode: '120',
      lookupName: '权限管理',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10002,
        description: '系统模块',
        lookupTypeName: '系统模块',
        status: 1
      }
    },
    {
      lookupId: 10006,
      description: 'GET',
      lookupCode: 'GET',
      lookupName: 'GET',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10007,
      description: 'HEAD',
      lookupCode: 'HEAD',
      lookupName: 'HEAD',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10008,
      description: 'POST',
      lookupCode: 'POST',
      lookupName: 'POST',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10009,
      description: 'PUT',
      lookupCode: 'PUT',
      lookupName: 'PUT',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    }
  ],
  last: false,
  totalPages: 2,
  totalElements: 15,
  size: 10,
  number: 0,
  sort: [
    {
      direction: 'ASC',
      property: 'lookupId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: true,
      descending: false
    },
    {
      direction: 'ASC',
      property: 'orderNumber',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: true,
      descending: false
    }
  ],
  first: true,
  numberOfElements: 10
})

Mock.mock('/lookup/lookupvalue/10000/10/1', 'get', {
  content: [
    {
      lookupId: 10000,
      description: '男',
      lookupCode: '1',
      lookupName: '男',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10000,
        description: '性别',
        lookupTypeName: '性别',
        status: 1
      }
    },
    {
      lookupId: 10001,
      description: '女',
      lookupCode: '0',
      lookupName: '女',
      orderNumber: 1,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10000,
        description: '性别',
        lookupTypeName: '性别',
        status: 1
      }
    }
  ],
  last: true,
  totalPages: 1,
  totalElements: 2,
  size: 10,
  number: 0,
  sort: null,
  first: true,
  numberOfElements: 2
})
Mock.mock('/lookup/lookupvalue/10001/10/1', 'get', {
  content: [
    {
      lookupId: 10003,
      description: '无效',
      lookupCode: '-1',
      lookupName: '无效',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10001,
        description: '是否有效状态',
        lookupTypeName: '状态',
        status: 1
      }
    },
    {
      lookupId: 10002,
      description: '有效',
      lookupCode: '1',
      lookupName: '有效',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10001,
        description: '是否有效状态',
        lookupTypeName: '状态',
        status: 1
      }
    }
  ],
  last: true,
  totalPages: 1,
  totalElements: 2,
  size: 10,
  number: 0,
  sort: null,
  first: true,
  numberOfElements: 2
})
Mock.mock('/lookup/lookupvalue/10002/10/1', 'get', {})
Mock.mock('/lookup/lookupvalue/10003/10/1', 'get', {
  content: [
    {
      lookupId: 10014,
      description: 'TRACE',
      lookupCode: '80',
      lookupName: 'TRACE',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10011,
      description: 'DELETE',
      lookupCode: 'DELETE',
      lookupName: 'DELETE',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10006,
      description: 'GET',
      lookupCode: 'GET',
      lookupName: 'GET',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10007,
      description: 'HEAD',
      lookupCode: 'HEAD',
      lookupName: 'HEAD',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10012,
      description: 'OPTIONS',
      lookupCode: 'OPTIONS',
      lookupName: 'OPTIONS',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10010,
      description: 'PATCH',
      lookupCode: 'PATCH',
      lookupName: 'PATCH',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10008,
      description: 'POST',
      lookupCode: 'POST',
      lookupName: 'POST',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10009,
      description: 'PUT',
      lookupCode: 'PUT',
      lookupName: 'PUT',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    },
    {
      lookupId: 10013,
      description: 'TRACE',
      lookupCode: 'TRACE',
      lookupName: 'TRACE',
      orderNumber: 0,
      status: 1,
      fndLookupType: {
        lookupTypeId: 10003,
        description: '请求方法，Http请求方法',
        lookupTypeName: '请求方法',
        status: 1
      }
    }
  ],
  last: true,
  totalPages: 1,
  totalElements: 9,
  size: 10,
  number: 0,
  sort: null,
  first: true,
  numberOfElements: 9
})
Mock.mock('/lookup/lookupvalue', 'post', '值列表增加成功')
Mock.mock('/lookup/lookupvalue', 'put', '值列表编辑成功')

Mock.mock('/lookup/lookupvalue/10001', 'get', {
  '1': '有效',
  '-1': '无效'
})
Mock.mock('/lookup/lookupvalue/10013', 'get', {
  '1': '是',
  '-1': '否'
})

Mock.mock('/url/10/1', 'get', {
  content: [
    {
      urlId: 0,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'GET',
      url: '/lookup/lookupvalue/*/*',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookupvalue/{pageSize}/{pageNumber}'
    },
    {
      urlId: 1,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'GET',
      url: '/lookup/lookupvalue/*/*/*',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookupvalue/{lookupTypeId}/{pageSize}/{pageNumber}'
    },
    {
      urlId: 2,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'GET',
      url: '/lookup/lookupvalue/*',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookupvalue/{lookupTypeId}'
    },
    {
      urlId: 3,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'PUT',
      url: '/lookup/lookuptype',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookuptype'
    },
    {
      urlId: 4,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'POST',
      url: '/lookup/lookuptype',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookuptype'
    },
    {
      urlId: 5,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'PUT',
      url: '/lookup/lookupvalue',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookupvalue'
    },
    {
      urlId: 6,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'DELETE',
      url: '/lookup/lookupvalue/*',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookupvalue/{id}'
    },
    {
      urlId: 7,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'DELETE',
      url: '/lookup/lookuptype/*',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookuptype/{id}'
    },
    {
      urlId: 8,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'POST',
      url: '/lookup/lookupvalue',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookupvalue'
    },
    {
      urlId: 9,
      isAccessChecked: 1,
      isEntryUrl: -1,
      isLoginRequired: 1,
      method: 'GET',
      url: '/lookup/lookuptype/*/*',
      urlIcon: null,
      urlName: null,
      urlTitle: null,
      fndPrvFunction: null,
      description: '/lookup/lookuptype/{pageSize}/{pageNumber}'
    }
  ],
  last: false,
  totalPages: 2,
  totalElements: 14,
  number: 0,
  size: 10,
  sort: [
    {
      direction: 'DESC',
      property: 'accountId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: false,
      descending: true
    }
  ],
  first: true,
  numberOfElements: 10
})

Mock.mock('/lookup/lookupvalue/10003', 'get', {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  HEAD: 'HEAD',
  TRACE: 'TRACE',
  PATCH: 'PATCH',
  OPTIONS: 'OPTIONS'
})

Mock.mock('/function/10/1', 'get', {
  content: [
    {
      functionCode: 'FUNCTION-MAINTAIN',
      functionDesc: '功能维护',
      functionName: '功能维护',
      module: '110'
    },
    {
      functionCode: 'FUNCTION-QUERY',
      functionDesc: '功能查询',
      functionName: '功能查询',
      module: '110'
    },
    {
      functionCode: 'LOOKUP-MAINTAIN',
      functionDesc: '值列表维护',
      functionName: '值列表维护',
      module: '110'
    },
    {
      functionCode: 'LOOKUP-QUERY',
      functionDesc: '值列表查询',
      functionName: '值列表查询',
      module: '110'
    }
  ],
  totalPages: 1,
  totalElements: 4,
  last: true,
  number: 0,
  size: 10,
  sort: [
    {
      direction: 'ASC',
      property: 'functionCode',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      descending: false,
      ascending: true
    }
  ],
  numberOfElements: 4,
  first: true
})
Mock.mock('/lookup/lookupvalue/10002', 'get', {
  '110': '系统设置',
  '120': '权限管理',
  '130': '值列表维护',
  '140': '用户管理',
  '150': '功能维护'
})
Mock.mock(
  '/url/10/1?url=1&isAccessChecked=1&isEntryUrl=-1&isLoginRequired=1',
  'get',
  {
    content: [
      {
        urlId: 1,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'GET',
        url: '/lookup/**',
        urlIcon: null,
        urlName: '值列表查询',
        urlTitle: null,
        fndPrvFunction: {
          functionCode: 'LOOKUP-QUERY',
          functionDesc: '值列表查询',
          functionName: '值列表查询',
          module: '110'
        },
        description: ''
      },
      {
        urlId: 2,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'POST',
        url: '/lookup/**',
        urlIcon: null,
        urlName: '值列表查询',
        urlTitle: null,
        fndPrvFunction: {
          functionCode: 'LOOKUP-MAINTAIN',
          functionDesc: '值列表维护',
          functionName: '值列表维护',
          module: '110'
        },
        description: null
      },
      {
        urlId: 3,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'PUT',
        url: '/lookup/**',
        urlIcon: null,
        urlName: '值列表查询',
        urlTitle: null,
        fndPrvFunction: {
          functionCode: 'LOOKUP-MAINTAIN',
          functionDesc: '值列表维护',
          functionName: '值列表维护',
          module: '110'
        },
        description: null
      },
      {
        urlId: 4,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'DELETE',
        url: '/lookup/**',
        urlIcon: null,
        urlName: '值列表查询',
        urlTitle: null,
        fndPrvFunction: {
          functionCode: 'LOOKUP-MAINTAIN',
          functionDesc: '值列表维护',
          functionName: '值列表维护',
          module: '110'
        },
        description: null
      },
      {
        urlId: 5,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'GET',
        url: '/lookup/lookuptype/*/*/*',
        urlIcon: null,
        urlName: '值列表查询',
        urlTitle: null,
        fndPrvFunction: null,
        description: '/lookup/lookuptype/{status}/{pageSize}/{pageNumber}'
      },
      {
        urlId: 6,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'GET',
        url: '/lookup/lookuptype/*/*',
        urlIcon: null,
        urlName: null,
        urlTitle: null,
        fndPrvFunction: null,
        description: '/lookup/lookuptype/{pageSize}/{pageNumber}'
      },
      {
        urlId: 7,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'GET',
        url: '/lookup/lookupvalue/*/*',
        urlIcon: null,
        urlName: null,
        urlTitle: null,
        fndPrvFunction: null,
        description: '/lookup/lookupvalue/{pageSize}/{pageNumber}'
      },
      {
        urlId: 8,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'GET',
        url: '/lookup/lookupvalue/*/*/*',
        urlIcon: null,
        urlName: null,
        urlTitle: null,
        fndPrvFunction: null,
        description:
          '/lookup/lookupvalue/{lookupTypeId}/{pageSize}/{pageNumber}'
      },
      {
        urlId: 9,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'GET',
        url: '/lookup/lookupvalue/*',
        urlIcon: null,
        urlName: null,
        urlTitle: null,
        fndPrvFunction: null,
        description: '/lookup/lookupvalue/{lookupTypeId}'
      },
      {
        urlId: 10,
        isAccessChecked: 1,
        isEntryUrl: -1,
        isLoginRequired: 1,
        method: 'DELETE',
        url: '/lookup/lookuptype/*',
        urlIcon: null,
        urlName: null,
        urlTitle: null,
        fndPrvFunction: null,
        description: '/lookup/lookuptype/{id}'
      }
    ],
    last: false,
    totalElements: 54,
    totalPages: 6,
    number: 0,
    size: 10,
    sort: [
      {
        direction: 'ASC',
        property: 'urlId',
        ignoreCase: false,
        nullHandling: 'NATIVE',
        ascending: true,
        descending: false
      }
    ],
    first: true,
    numberOfElements: 10
  }
)
Mock.mock('/role/10/1', 'get', {
  content: [
    {
      roleId: 10000,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '超级管理员',
      roleType: 0,
      status: 1,
      dateStatus: 1
    },
    {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1,
      dateStatus: 1
    },
    {
      roleId: 10002,
      dateFrom: '2018-02-03 19:44:54',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '财务职员',
      roleName: '财务职员',
      roleType: 0,
      status: 1,
      dateStatus: 1
    },
    {
      roleId: 10003,
      dateFrom: '2018-02-03 19:46:33',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '物流文员',
      roleName: '物流文员',
      roleType: 0,
      status: 1,
      dateStatus: 1
    },
    {
      roleId: 10004,
      dateFrom: '2018-02-04 00:00:00',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '大区经理',
      roleName: '大区经理',
      roleType: 0,
      status: 1,
      dateStatus: 0
    },
    {
      roleId: 10005,
      dateFrom: '2018-02-03 21:45:22',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '省区总经理',
      roleName: '省区总经理',
      roleType: 0,
      status: -1,
      dateStatus: 1
    }
  ],
  last: true,
  totalPages: 1,
  totalElements: 6,
  size: 10,
  number: 0,
  sort: [
    {
      direction: 'ASC',
      property: 'roleId',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      ascending: true,
      descending: false
    }
  ],
  first: true,
  numberOfElements: 6
})

Mock.mock('/role/roleaccess/10001', 'get', [
  {
    id: {
      roleId: 10001,
      functionCode: 'FUNCTION-MAINTAIN'
    },
    fndPrvFunction: {
      functionCode: 'FUNCTION-MAINTAIN',
      functionDesc: '功能维护',
      functionName: '功能维护',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  },
  {
    id: {
      roleId: 10001,
      functionCode: 'LOOKUP-MAINTAIN'
    },
    fndPrvFunction: {
      functionCode: 'LOOKUP-MAINTAIN',
      functionDesc: '值列表维护',
      functionName: '值列表维护',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  },
  {
    id: {
      roleId: 10001,
      functionCode: 'LOOKUP-QUERY'
    },
    fndPrvFunction: {
      functionCode: 'LOOKUP-QUERY',
      functionDesc: '值列表查询',
      functionName: '值列表查询',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  }
])

Mock.mock('/role/roleaccess/10001', 'get', [
  {
    id: {
      roleId: 10001,
      functionCode: 'FUNCTION-MAINTAIN'
    },
    fndPrvFunction: {
      functionCode: 'FUNCTION-MAINTAIN',
      functionDesc: '功能维护',
      functionName: '功能维护',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  },
  {
    id: {
      roleId: 10001,
      functionCode: 'LOOKUP-MAINTAIN'
    },
    fndPrvFunction: {
      functionCode: 'LOOKUP-MAINTAIN',
      functionDesc: '值列表维护',
      functionName: '值列表维护',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  },
  {
    id: {
      roleId: 10001,
      functionCode: 'LOOKUP-QUERY'
    },
    fndPrvFunction: {
      functionCode: 'LOOKUP-QUERY',
      functionDesc: '值列表查询',
      functionName: '值列表查询',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  }
])

Mock.mock('/role/roleaccess/10000', 'get', [
  {
    id: {
      roleId: 10001,
      functionCode: 'FUNCTION-MAINTAIN'
    },
    fndPrvFunction: {
      functionCode: 'FUNCTION-MAINTAIN',
      functionDesc: '功能维护',
      functionName: '功能维护',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  },
  {
    id: {
      roleId: 10001,
      functionCode: 'LOOKUP-QUERY'
    },
    fndPrvFunction: {
      functionCode: 'LOOKUP-QUERY',
      functionDesc: '值列表查询',
      functionName: '值列表查询',
      module: '110'
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1
    }
  }
])
Mock.mock('/role/roleassign/10000', 'get', [
  {
    id: {
      roleId: 10001,
      accountId: 10000
    },
    dateFrom: '2017-08-22 00:00:00',
    dateTo: '5000-01-01 00:00:00',
    isDefaultRole: 1,
    orgId: 0,
    fndPrvLoginAccount: {
      accountId: 10000,
      description: '管理员',
      employeeId: 0,
      loginName: 'admin',
      status: 1
    },
    fndPrvRole: {
      roleId: 10001,
      dateFrom: '2017-08-23 00:11:25',
      dateTo: '5000-01-01 00:00:00',
      roleDesc: '系统管理员',
      roleName: '系统管理员',
      roleType: 0,
      status: 1,
      dateStatus: 1
    }
  }
])

Mock.mock('/menu/10/1', 'get', {
  content: [
    {
      menuId: 4,
      menuDesc: '系统设置',
      menuIcon: 'fa fa-cogs',
      menuTitle: '系统设置',
      menuType: 0,
      orderNumber: 10,
      parentMenu: null
    },
    {
      menuId: 3,
      menuDesc: '用户管理',
      menuIcon: 'fa fa-users',
      menuTitle: '用户管理',
      menuType: 0,
      orderNumber: 20,
      parentMenu: null
    },
    {
      menuId: 1,
      menuDesc: '值列表维护',
      menuIcon: 'fa fa-bars',
      menuTitle: '值列表维护',
      menuType: 0,
      orderNumber: 30,
      parentMenu: null
    }
  ],
  totalPages: 1,
  totalElements: 3,
  last: true,
  number: 0,
  size: 10,
  sort: [
    {
      direction: 'ASC',
      property: 'orderNumber',
      ignoreCase: false,
      nullHandling: 'NATIVE',
      descending: false,
      ascending: true
    }
  ],
  first: true,
  numberOfElements: 3
})

Mock.mock('/url/entrty', 'get', [
  {
    urlId: 54,
    isAccessChecked: 1,
    isEntryUrl: 1,
    isLoginRequired: 1,
    method: 'GET',
    url: '/main/lookup-maintain',
    urlIcon: 'fa fa-list',
    urlName: '值列维护',
    urlTitle: '值列维护',
    fndPrvFunction: {
      functionCode: 'LOOKUP-MAINTAIN',
      functionDesc: '值列表维护',
      functionName: '值列表维护',
      module: '110'
    },
    description: '值列维护入口页面'
  },
  {
    urlId: 57,
    isAccessChecked: 1,
    isEntryUrl: 1,
    isLoginRequired: 1,
    method: 'GET',
    url: '/main/account-maint',
    urlIcon: 'fa fa-users',
    urlName: '用户管理',
    urlTitle: '用户管理',
    fndPrvFunction: {
      functionCode: 'FUNCTION-QUERY',
      functionDesc: '功能查询',
      functionName: '功能查询',
      module: '110'
    },
    description: '用户管理'
  }
])
Mock.mock('/menu/url/4', 'get', [
  {
    id: {
      menuId: 4,
      urlId: 54
    },
    orderNumber: 0,
    fndMenu: {
      menuId: 4,
      menuDesc: '系统设置',
      menuIcon: 'fa fa-cogs',
      menuTitle: '系统设置',
      menuType: 0,
      orderNumber: 10,
      parentMenu: null
    },
    fndUrl: {
      urlId: 54,
      isAccessChecked: 1,
      isEntryUrl: 1,
      isLoginRequired: 1,
      method: 'GET',
      url: '/main/lookup-maintain',
      urlIcon: 'fa fa-list',
      urlName: '值列维护',
      urlTitle: '值列维护',
      fndPrvFunction: {
        functionCode: 'LOOKUP-MAINTAIN',
        functionDesc: '值列表维护',
        functionName: '值列表维护',
        module: '110'
      },
      description: '值列维护入口页面'
    }
  },
  {
    id: {
      menuId: 4,
      urlId: 57
    },
    orderNumber: 0,
    fndMenu: {
      menuId: 4,
      menuDesc: '系统设置',
      menuIcon: 'fa fa-cogs',
      menuTitle: '系统设置',
      menuType: 0,
      orderNumber: 10,
      parentMenu: null
    },
    fndUrl: {
      urlId: 57,
      isAccessChecked: 1,
      isEntryUrl: 1,
      isLoginRequired: 1,
      method: 'GET',
      url: '/main/account-maint',
      urlIcon: 'fa fa-users',
      urlName: '用户管理',
      urlTitle: '用户管理',
      fndPrvFunction: {
        functionCode: 'FUNCTION-QUERY',
        functionDesc: '功能查询',
        functionName: '功能查询',
        module: '110'
      },
      description: '用户管理'
    }
  }
])
Mock.mock('/menu/root', 'get', [
  {
    menuId: 4,
    menuDesc: '系统设置',
    menuIcon: 'fa fa-cogs',
    menuTitle: '系统设置',
    menuType: 0,
    orderNumber: 10,
    parentMenu: null
  },
  {
    menuId: 3,
    menuDesc: '用户管理',
    menuIcon: 'fa fa-users',
    menuTitle: '用户管理',
    menuType: 0,
    orderNumber: 20,
    parentMenu: null
  },
  {
    menuId: 1,
    menuDesc: '值列表维护',
    menuIcon: 'fa fa-bars',
    menuTitle: '值列表维护',
    menuType: 0,
    orderNumber: 30,
    parentMenu: null
  },
  {
    menuId: 5,
    menuDesc: '菜单管理',
    menuIcon: 'fa fa-bars',
    menuTitle: '菜单管理',
    menuType: 0,
    orderNumber: 40,
    parentMenu: null
  },
  {
    menuId: 6,
    menuDesc: '报表查看',
    menuIcon: 'fa fa-pie-chart',
    menuTitle: '报表查看',
    menuType: 0,
    orderNumber: 100,
    parentMenu: null
  },
  {
    menuId: 7,
    menuDesc: '销量分析',
    menuIcon: 'fa fa-bar-chart',
    menuTitle: '销量分析',
    menuType: 0,
    orderNumber: 100,
    parentMenu: null
  }
])
