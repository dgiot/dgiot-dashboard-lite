import { useEffect, useMemo, useState } from 'react';
import auth, { AuthParams } from '@/utils/authentication';

export type Route = AuthParams & {
  name: string;
  key: string;
  breadcrumb?: boolean;
  children?: Route[];
};

export const routes: Route[] = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      {
        name: 'menu.dashboard.workplace',
        key: 'dashboard/workplace',
      },
      {
        name: 'menu.dashboard.monitor',
        key: 'dashboard/monitor',
        requiredPermissions: [{ resource: 'menu.dashboard.monitor', actions: ['write'] }],
      },
      {
        name: 'menu.dashboard.amis',
        key: 'dashboard/amis',
        requiredPermissions: [{ resource: 'menu.dashboard.amis', actions: ['write'] }],
      },
      {
        name: 'menu.dashboard.alibaba',
        key: 'dashboard/alibaba',
        requiredPermissions: [{ resource: 'menu.dashboard.alibaba', actions: ['write'] }],
      },
      {
        name: 'menu.dashboard.datav',
        key: 'dashboard/datav',
        requiredPermissions: [{ resource: 'menu.dashboard.datav', actions: ['write'] }],
      },
      {
        name: 'menu.dashboard.baiduMap',
        key: 'dashboard/baiduMap',
        requiredPermissions: [{ resource: 'menu.dashboard.baiduMap', actions: ['write'] }],
      },
    ],
  },
  {
    name: 'menu.exception',
    key: 'exception',
    children: [
      {
        name: 'menu.exception.403',
        key: 'exception/403',
      },
      {
        name: 'menu.exception.404',
        key: 'exception/404',
      },
      {
        name: 'menu.exception.500',
        key: 'exception/500',
      },
    ],
  },
];

export const getName = (path: string, routes) => {
  return routes.find((item) => {
    const itemPath = `/${item.key}`;
    if (path === itemPath) {
      return item.name;
    }
    if (item.children) {
      return getName(path, item.children);
    }
  });
};

export const generatePermission = (role: string) => {
  const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        result[child.name] = actions;
      });
    }
  });
  return result;
};

const useRoute = (userPermission): [Route[], any] => {

  const [permissionRoute, setPermissionRoute] = useState(routes);

  useEffect(() => {
    const filterRoute = (routes: Route[], arr = []): Route[] => {
      if (!routes.length) {
        return [];
      }
      for (const route of routes) {
        const { requiredPermissions, oneOfPerm } = route;
        let visible = true;
        if (requiredPermissions) {
          visible = auth({ requiredPermissions, oneOfPerm }, userPermission);
        }

        if (!visible) {
          continue;
        }
        if (route.children && route.children.length) {
          const newRoute = { ...route, children: [] };
          filterRoute(route.children, newRoute.children);
          if (newRoute.children.length) {
            arr.push(newRoute);
          }
        } else {
          arr.push({ ...route });
        }
      }

      return arr;
    };
    const newRoutes = filterRoute(routes);
    setPermissionRoute(newRoutes);
  }, [userPermission]);

  const defaultRoute = useMemo(() => {
    const first = permissionRoute[0];
    if (first) {
      const firstRoute = first?.children?.[0]?.key || first.key;
      return firstRoute;
    }
    return '';
  }, [permissionRoute]);

  return [permissionRoute, defaultRoute];
};

export default useRoute;
