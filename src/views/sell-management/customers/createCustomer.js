import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import * as request from '../../../utils/axios'

const FormsElements = () => {
  const [validated, setValidated] = useState(false);
  const [validatedTooltip, setValidatedTooltip] = useState(false);
  const [supportedCheckbox, setSupportedCheckbox] = useState(false);
  const [supportedRadio, setSupportedRadio] = useState(false);
  const [supportedSelect, setSupportedSelect] = useState(0);
  const [supportedFile, setSupportedFile] = useState(0);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleSubmitTooltip = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedTooltip(true);
  };

  const supportedSelectHandler = (event) => {
    setSupportedSelect(parseInt(event.target.value));
  };

  const supportedFileHandler = (event) => {
    setSupportedFile(!!event.target.value);
  };

  return (
    <React.Fragment>
      <Button variant="danger" className="mb-3" href="/app/sell-management/customers">
        Quay lại danh sách khách hàng
      </Button>

      <Row>
        <Col sm={12} lg={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Thông tin chung</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Form>
                    <Form.Group controlId="nameCustomer">
                      <Form.Label>Tên khách hàng</Form.Label>
                      <Form.Control type="text" placeholder="Nhập tên khách hàng" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="idCustomer">
                    <Form.Label>Mã khách hàng</Form.Label>
                    <Form.Control onChange={(e) => console.log(e.target.value) } type="text" placeholder="Nhập mã khách hàng" />
                  </Form.Group>
                  <Form.Group controlId="phoneCustomer">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" placeholder="Nhập số điện thoại" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Khu vực</Form.Label>
                    <Form.Control as="select">
                      <option>Chọn Tỉnh/Thành phố - Quận/Huyện</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Nhóm khách hàng</Form.Label>
                    <Form.Control as="select">
                      <option>Chọn nhóm khách hàng</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="emailCustomer">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Nhập địa chỉ email" />
                  </Form.Group>
                  <Form.Group controlId="strictCustomer">
                    <Form.Label>Phường xã</Form.Label>
                    <Form.Control as="select">
                      <option>Chọn Phường/Xã</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={12} lg={12}>
                  <Form.Group controlId="addressCustomer">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Thông tin khác</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="staffCb">
                  <Form.Label>Nhân viên phụ trách</Form.Label>
                  <Form.Control as="select">
                    <option>Nghĩa</option>
                    <option>Tuấn</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="tag">
                  <Form.Label>Tag</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Thông tin bổ sung</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group controlId="dobCustomer">
                      <Form.Label>Ngày sinh</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="faxCustomer">
                      <Form.Label>Số fax</Form.Label>
                      <Form.Control type="text" placeholder="Nhập số fax" />
                    </Form.Group>
                    <Form.Group controlId="websiteCustomer">
                      <Form.Label>Website</Form.Label>
                      <Form.Control type="text" placeholder="Nhập tên miền Website" />
                    </Form.Group>
                    <Form.Group controlId="websiteCustomer">
                      <Form.Label>Tổng chi tiêu</Form.Label>
                      <Form.Control type="text" placeholder="Nhập tổng chi tiêu" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="sexCustomer">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Control as="select">
                      <option>Khác</option>
                      <option>Nam</option>
                      <option>Nữ</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="taxIdCustomer">
                    <Form.Label>Mã số thuế</Form.Label>
                    <Form.Control type="text" placeholder="Nhập mã số thuế" />
                  </Form.Group>
                  <Form.Group controlId="taxIdCustomer">
                    <Form.Label>Công nợ</Form.Label>
                    <Form.Control type="text" placeholder="Nhập công nợ khách hàng" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ top: '-130px' }} sm={12} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Cài đặt nâng cao</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label className="ml-3" sm={12}>
                      <strong style={{ color: 'black' }}>Áp dụng ưu đãi</strong>
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Check
                        className="mt-2"
                        type="radio"
                        label="Theo nhóm khách hàng"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        className="mt-2"
                        type="radio"
                        label="Theo khách hàng"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Form>
            </Card.Body>
          </Card>
          <Button onClick={(e) => handleSubmit(e)}>Lưu khách hàng mới</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormsElements;
