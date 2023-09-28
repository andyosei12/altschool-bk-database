const db = require('./db');
const RoleModel = require('./models/role.model');
const UserModel = require('./models/user.model');
const CategoryModel = require('./models/category.model');
const ProductModel = require('./models/product.model');
const AdminModel = require('./models/admin.model');

db.connect();

const users = async () => {
  try {
    await UserModel.insertMany([
      {
        _id: '651548cb28253e1875ba4735',
        name: 'Nana',
        email: 'nana@example.com',
        address: 'lagos',
        password: '1244566',
        contact: '9035444444',
        role_id: 2,
      },
    ]);
    console.log('users added to db successfully');
  } catch (error) {
    console.log('Error seeding user', err);
  }
};

const roles = async () => {
  try {
    await RoleModel.insertMany([
      {
        _id: 1,
        title: 'user',
      },
      {
        _id: 2,
        title: 'admin',
      },
    ]);
    console.log('roles added to db successfully');
  } catch (error) {
    console.log('Error seeding roles', err);
  }
};

const categories = async () => {
  try {
    await CategoryModel.insertMany([
      {
        _id: 'p1',
        name: 'Electronics',
      },
      {
        _id: 'p2',
        name: 'Shirt',
      },
      {
        _id: 'p3',
        name: 'Shoe',
      },
      {
        _id: 'p4',
        name: 'Trouser',
      },
      {
        _id: 'p5',
        name: 'Books',
      },
      {
        _id: 'p6',
        name: 'Movies',
      },
    ]);
    console.log('categories added to db successfully');
  } catch (error) {
    console.log('Error seeding categories', error);
  }
};

const products = async () => {
  try {
    await ProductModel.insertMany([
      {
        name: 'Long sleeves',
        price: 10.88,
        size: 's',
        image_url: 'https://shoe.example.com',
        description: 'Quality sleeves for all occasions',
        category_id: 'p2',
      },
      {
        name: 'Gucci shirt',
        price: 90,
        size: 'm',
        image_url: 'https://gucci.example.com',
        description: 'Quality gucci shirt for all occasions',
        category_id: 'p2',
      },
      {
        name: 'Demi jeans',
        price: 11.55,
        size: 's',
        image_url: 'https://demi.example.com',
        description: 'Quality demi jeans for all occasions',
        category_id: 'p4',
      },
      {
        name: 'Prada desert boots',
        price: 10.88,
        size: 'm',
        image_url: 'https://prada.example.com',
        description: 'Quality prada shoe',
        category_id: 'p3',
      },
      {
        name: 'Demiil Office shoe',
        price: 30,
        size: 'm',
        image_url: 'https://demill.example.com',
        description: 'Quality demill shoe for office',
        category_id: 'p3',
      },
      {
        name: 'Marco Polo Shirt',
        price: 10.88,
        size: 's',
        image_url: 'https://polo.example.com',
        description: 'Quality sleeves for all occasions',
        category_id: 'p2',
      },
      {
        name: 'Manga Top',
        price: 8,
        size: 's',
        image_url: 'https://manga.example.com',
        description: 'Quality sleeves for all occasions',
        category_id: 'p2',
      },
      {
        name: 'Denta Shoe',
        price: 70.88,
        size: 'm',
        image_url: 'https://denta.example.com',
        description: 'Quality shoe for all occasions',
        category_id: 'p3',
      },
      {
        name: 'Top benna',
        price: 11.77,
        size: 's',
        image_url: 'https://benna.example.com',
        description: 'Quality shoe for all occasions',
        category_id: 'p2',
      },
      {
        name: 'Dreee jeans',
        price: 10.88,
        size: 'm',
        image_url: 'https://dree.example.com',
        description: 'Quality jeans for all occasions',
        category_id: 'p4',
      },
      {
        name: 'Khaki shorts',
        price: 5.88,
        size: 's',
        image_url: 'https://khaki.example.com',
        description: 'Quality trouser for all occasions',
        category_id: 'p4',
      },
    ]);
    console.log('products added to db successfully');
  } catch (error) {
    console.log('Error seeding products', error);
  }
};

const admins = async () => {
  try {
    await AdminModel.insertMany([
      {
        user_id: '651548cb28253e1875ba4735',
      },
    ]);
    console.log('products added to db successfully');
    process.exit(1);
  } catch (error) {
    console.log('Error seeding admins', error);
  }
};

users();
roles();
categories();
products();
admins();
