import { container } from 'tsyringe';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import ProductRepository from '../repositories/productRepository';
import ProductService from '../services/productService';
import ordersRepository from '../repositories/ordersRepository';
import OrdersServices from '../services/ordersServices';
import ProductCartRepository from '../repositories/productCartRepository';
import ProductCartService from '../services/productCartServices';
import EntitieRepository from '../repositories/entitiesRepository';
import EntitieServices from '../services/entitiesServices';
import RoleRepository from '../repositories/rolesRepository';
import RoleService from '../services/rolesServices';
import CartRepository from '../repositories/cartRepository';
import CartServices from '../services/cartsServices';


container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);
container.registerSingleton<ProductRepository>(ProductRepository)
container.registerSingleton<ProductService>(ProductService);
container.registerSingleton<ordersRepository>(ordersRepository);
container.registerSingleton<OrdersServices>(OrdersServices);

container.registerSingleton<ProductCartRepository>(ProductCartRepository);
container.registerSingleton<ProductCartService>(ProductCartService);

container.registerSingleton<EntitieRepository>(EntitieRepository);
container.registerSingleton<EntitieServices>(EntitieServices);

container.registerSingleton<RoleRepository>(RoleRepository);
container.registerSingleton<RoleService>(RoleService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartServices>(CartServices);